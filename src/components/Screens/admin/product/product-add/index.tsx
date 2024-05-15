import React, { useState } from 'react';
import styled from 'styled-components';
import ProductForm from '../product-form';
import { Card } from './styles';
import { User } from '../../../../../api/auth/user.interface';
import { Product } from '../../../../../api/product/product.interface';
import  useApiRequest  from '../../../../../api';
import { useAuth } from '../../../../../context/auth/Auth.context';

interface ProductResponse {

}

const ProductAdd: React.FC = () => {

  const [data, setData] = useState<Product>({
    // id? :,
    title : '',
    description : '',
    price : 0,
    slug : '',
    stock : 0,
    sizes : [],
    gender : '',
    tags : [],
    images : [],
    user: {
      // id? : '',
      email : '',
      token: '',
    },
  })

  const {apiRequest} = useApiRequest()
  const {user} = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement> ) => {
    const {name, value} = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  } 

  const handleMultiChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: Array.isArray(prevData[name]) ? [...prevData[name] as any[], value] : [value],
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      // Aquí se agregaría el usuario al objeto data si es necesario antes de hacer la petición.
      const fullData = { ...data };
      const result = await apiRequest<Product, ProductResponse>('products/add', 'post', fullData);
      console.log(result);
      // Procesar la respuesta
    } catch (error) {
      console.error('Error al agregar el producto', error);
    }
  };



  return (
    <Card>
        <ProductForm>
        </ProductForm>
    </Card>   
    )
};

export default ProductAdd;
