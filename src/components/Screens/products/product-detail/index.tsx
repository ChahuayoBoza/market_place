import React, { useEffect, useState } from "react";
import { ImageGallery, ImageGalleryContainer, ProductDetails, ProductImage, ProductPageContainer, ProductSectionsContainer, SectionProductDetail, SectionProductImage } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import useApiRequest from "../../../../api";
import { ProductDetailResponse } from "../../../../api/product/product-detail-response.interface";
import { ButtonBack } from "../../shared/back-button/styles";
import Icon from "react-icons-kit"; 
import {chevronLeft} from 'react-icons-kit/feather/chevronLeft'

interface ProductId {
    idProduct: string;
}
const ProductDetail = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [product, setProduct] = useState<ProductDetailResponse>();
    const [activeImage, setActiveImage] = React.useState(product?.images[0]);
    const {apiRequest} = useApiRequest();


    const getProduct = async () => {
        try {

            const response = await apiRequest<ProductId, ProductDetailResponse>(`products/${id}`,'GET');
            setProduct(response.data);
            setActiveImage(response.data?.images[0]);
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getProduct();
        console.log('PRDUCT', product)
    }, []);


    return (
        <>
            <ProductPageContainer> 
                <ButtonBack onClick={() => navigate(-1)}>
                    Regresar &nbsp;
                    <Icon icon={chevronLeft} size={20}></Icon> 
                </ButtonBack> 
                <ProductSectionsContainer>
                    <SectionProductImage>
                        {/* <ProductImage src={product?.images[0]} alt="Product" /> */}
                        <ProductImage src={activeImage} alt="Product" />
                        <ImageGalleryContainer>
                        { product && product.images.map((image, index) => (
                            <ImageGallery
                            key={index}
                            src={image}
                            alt={`Product Thumbnail ${index}`}
                            onClick={() => setActiveImage(image)}
                            style={{ border: activeImage === image ? '2px solid green' : 'none' }}
                            />
                        ))}
                        </ImageGalleryContainer>
                    </SectionProductImage>       
                <SectionProductDetail>                        
                        <ProductDetails>
                            <h1 className="title">{product?.title}</h1>
                            <p className="price">${product?.price}</p>
                            <p className="description">{product?.description}</p>
                        </ProductDetails>
                </SectionProductDetail>            
                </ProductSectionsContainer>
            </ProductPageContainer>
            
        </>

    );
};

export default ProductDetail;