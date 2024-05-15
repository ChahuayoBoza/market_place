
import { Product } from '../../../../../api/product/product.interface';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Button, CheckGroup, CheckboxContainer, Form, Input, InputCheckbox, InputGroup, InputTag, Label, Select, Tag, TagListContainer, TagsInputContainer, Textarea } from './styles';
import { genders, sizes } from '../../../../../utils/product';
import { useAuth } from '../../../../../context/auth/Auth.context';
import { User } from '../../../../../api/auth/user.interface';
import useApiRequest from '../../../../../api';
import { Category } from '../../../../../api/category/category-request.interface';
import { CategoryResponse } from '../../../../../api/category/category-response.interface';
import useApi from '../../../../../hooks/use-api';
// import { ProductImage, ProductImageReq, UrlResponse } from '../../../../../api/product/image-product.interface';

interface ImageUploadResponse {
    secureUrl: string; 
}

interface ProductResponse {
    id: string;
    title: string;
        price: number;
        description: string;
        slug: string;
        stock: number;
        sizes: string[];
        gender: string;
        tags: string[]
        images: string[],
        user: User;
}
const ProductForm = () => {
    const {user} = useAuth();
    const {apiRequest} = useApiRequest();
    const [formData, setFormData] = useState<Product>({
        title: '',
        price: 0,
        description: '',
        slug: '',
        stock: 0,
        sizes: [],
        gender: '',
        tags: [],
        images: [],        
    })
        
    const [tagInput, setTagInput] = useState<string>('');
    const [selectedImages, setSelectedImages] = useState<FileList | null>(null);
    const [selectedCategory, setSelectedCategory] = useState('');
    const { data: categories, error, loading, fetchData } = useApi();

    const handleFormDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
    
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };    


    const handleAddImage = (imageUrl: string) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            images: [...prevFormData.images, imageUrl], 
        }));
    };

    const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedText = event.target.value
        console.log("GENERO-SELECCINADO", selectedText);
        setFormData(prevFormData => ({
            ...prevFormData,
            gender: selectedText, 
        }));
    };

    const getCategories = async () => {
        
        try {
            fetchData({
                endpoint: '/categories',
                method: 'GET'
            });
    
        } catch (error) {
            console.error('Hubo un error al enviar el formulario:', error);
        }
    }

    useEffect(() => {
        getCategories();
    },[])

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategoryId = event.target.value;
        setSelectedCategory(selectedCategoryId);
    }

    const handleSizeChange = (size: string) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            sizes: prevFormData.sizes.includes(size)
                ? prevFormData.sizes.filter(s => s !== size) 
                : [...prevFormData.sizes, size],
        }));
    };

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTagInput(e.target.value);
    };

    const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && e.currentTarget.value) {
            e.preventDefault();
            const newTag = e.currentTarget.value.trim();
            if (!formData.tags.includes(newTag)) {
                setFormData(prevFormData => ({
                    ...prevFormData,
                    tags: [...prevFormData.tags, newTag], 
                }));
                setTagInput('');
            }
        }
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            tags: prevFormData.tags.filter(tag => tag !== tagToRemove), 
        }));
    };

    
    const handleImageSelection = async (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("selectedImages:", selectedImages);
        if (event.target.files && event.target.files.length > 0) {
        setSelectedImages(event.target.files); 
        await handleUploadImages(event.target.files)
        console.log("Imágenes seleccionadas:", event.target.files);
        }else {
            setSelectedImages(null);
        }
    };
    
    const handleUploadImages = async (files: FileList) => {
        const uploadPromises = Array.from(files).map(file => uploadImage(file));

        try {
            const imagesUrls = await Promise.all(uploadPromises);
            imagesUrls.forEach(url => {
                handleAddImage(url);
            });
        } catch (error) {
            console.error("Error al cargar imagens", error);
        }
            // if (!selectedImages) {
            // console.error("No hay imágenes seleccionadas para cargar.");
            // return;
            // }

            // const uploadPromises: Promise<string>[] = [];
        
            // for (let i = 0; i < selectedImages.length; i++) {
            //     const file = selectedImages[i];
            //     // const formData = new FormData();
            //     // formData.append('file', file);
            //     uploadPromises.push(uploadImage(file));
            // }
        
            // try {
            //     const imagesUrls = await Promise.all(uploadPromises);
            //     imagesUrls.forEach(url => {
            //         handleAddImage(url); 
            //     });
            // } catch (error) {
            //     console.error("Error al cargar imágenes:", error);
            // }
    };
    
    const uploadImage = async (file: File): Promise<string> => {
        const formData = new FormData();
        formData.append('file', file); // Asegúrate de que 'image' sea la clave correcta según tu API de imágenes
    
        try {
            const response = await apiRequest<FormData, ImageUploadResponse>(
                'files/product', 
                'POST',
                formData, 
            );
                console.log("TRY", response)
            // Asegúrate de que 'data' y 'imageUrl' existen en la respuesta.
            if (response.data && response.data.secureUrl) {
                console.log("Respuesta de la imagen", response);
                return response.data.secureUrl;
            } else {
                throw new Error("La respuesta no contiene la URL de la imagen");
            }
        } catch (error: any) {
            console.error("Error al cargar la imagen:", error);
            throw new Error("La carga de la imagen falló");
        }
    };
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("selectedImages en handleSubmit:", selectedImages);
        
        if (!user) {
            console.error("No hay información de usuario. Asegúrate de estar autenticado.", user);
            return; 
        }

        // if(selectedImages) {            
        //         await handleUploadImages();            
        // }

        const productToSubmit = {
            ...formData,
            price:+formData.price,
            stock:+formData.stock,
            tags: formData.tags
        };
    
        try {
            console.log("productToSubmit", productToSubmit);
            // const dataProduct = await apiRequest<Product, ProductResponse>('products', 'POST', productToSubmit); 
    
        } catch (error) {
            console.error('Hubo un error al enviar el formulario:', error);
        }
    };
    
    

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Input
                    type="text"
                    name="title"
                    placeholder="Nombre de Producto"
                    value={formData.title}
                    onChange={handleFormDataChange}
                />
            </InputGroup>        
            <InputGroup>
                <Textarea
                    name='description'
                    value={formData.description}
                    onChange={handleFormDataChange}
                    placeholder='Descripción'
                />
            </InputGroup>
            <InputGroup>
                <Input
                    type="number"
                    name='price'
                    value={formData.price}
                    onChange={handleFormDataChange}
                    placeholder="Precio"
                />
            </InputGroup>
            <InputGroup>
                <Select defaultValue={""} onChange={handleCategoryChange}>
                    <option value="" disabled>Seleccione categoría</option>
                    {
                        categories && categories.map((category) => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))
                    }         
                </Select>
            </InputGroup>
            <InputGroup>
                <Input
                    type="text"
                    name='slug'
                    placeholder="Slug"
                    value={formData.slug}
                    onChange={handleFormDataChange}
                />
            </InputGroup>
            <InputGroup>
                <Input
                    type="number"
                    name='stock'
                    value={formData.stock}
                    onChange={handleFormDataChange}
                    placeholder="Stock"
                />
            </InputGroup>
            <InputGroup>
                <Select defaultValue={""} onChange={handleGenderChange}>
                    <option value="" disabled>Seleccione genero</option>
                    {
                        genders.map((gender, index) => (
                            <option key={index} value={gender}>{gender}</option>
                        ))
                    }         
                </Select>
            </InputGroup>     
            <CheckGroup>
                <Label>Tallas</Label>
                <CheckboxContainer>
                    {sizes.map((size, index) => (
                        <Label key={index}>
                            <InputCheckbox
                                type="checkbox"
                                checked={formData.sizes.includes(size)}
                                onChange={() => handleSizeChange(size)}
                            />
                            {size}
                        </Label>
                        ))}
                </CheckboxContainer>
            </CheckGroup>          
            <InputGroup>
                    <TagsInputContainer>
                        <InputTag
                            type="text"
                            placeholder="Añadir tag..."
                            value={tagInput}
                            onChange={handleTagChange}
                            onKeyDown={handleTagKeyDown}
                        />
                        <TagListContainer>
                        {formData.tags.map((tag) => (
                            <Tag key={tag} onClick={() => handleRemoveTag(tag)}>
                                {tag} ×
                            </Tag>
                        ))}
                        </TagListContainer>
                    </TagsInputContainer>
                </InputGroup>
            <InputGroup>
                <Input
                    type="file"
                    id="productImages"
                    name="productImages"
                    onChange={handleImageSelection}
                    multiple 
                    accept="image/*" // Esto restringe los archivos a tipos de imagen
                />
            </InputGroup>
            <Button type="submit">Agregar Producto</Button>
        </Form>
    );
};

export default ProductForm;
