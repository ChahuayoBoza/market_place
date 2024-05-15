import React from "react";
import { CardButton, ProductImage, ProductItem, ProductPrice, ProductTitle } from "./styles";
import { LinkStyle } from "../../nav-bar/styles";

const ProductCard = ({ product }) => {
    return (
      <>
        <ProductItem>
          <LinkStyle to={`/products/${product.id}`}>
            <ProductImage src="https://th.bing.com/th/id/OIP.tsmd4QCoeAWpxOesjzPKagHaLK?w=132&h=199&c=7&r=0&o=5&pid=1.7" alt={product.title} />
          </LinkStyle>             
          <CardButton>Agregar</CardButton>      
          <LinkStyle to={`/products/${product.id}`}>
            <ProductTitle>{product.title}</ProductTitle>
          </LinkStyle>           
          <ProductPrice>S/.&nbsp;{product.price}.00</ProductPrice>
        </ProductItem>
      </>
    );
}

export default ProductCard;