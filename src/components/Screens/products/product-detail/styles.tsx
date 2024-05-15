import styled from 'styled-components';
import './../../../../assets/fonts/DINNextRoundedLTPro-Medium/style.css'

export const ProductPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    gap: 2rem;
    margin-top: 70px;
`;

export const SectionProductDetail = styled.div`
    display: flex;
    justify-content: start; /* Centra horizontalmente */
    //align-items: center; /* Centra verticalmente */
    height: 100%; 
    text-align: justify;
  /* Agrega cualquier otro estilo que necesites */
`;

export const ProductSectionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* justify-content: center; */
    /* padding: 12rem 10rem 10rem 10rem; */
    gap: 2rem;
        margin-top: -20px;
`;


export const SectionProductImage = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column; /* Organiza los ítems en una columna */
    align-items: flex-end; /* Alinea los ítems al inicio (izquierda) */
    height: auto; /* O un valor fijo si es necesario para la altura total */
`;


export const ImageGalleryContainer = styled.div`
    display: flex; /* Habilita Flexbox para la galería de imágenes */
    flex-direction: row; /* Alinea las imágenes pequeñas en fila */
    flex-wrap: wrap; /* Permite que las imágenes se ajusten a la siguiente línea si no hay espacio */
    justify-content: flex-start; /* Alinea las imágenes al inicio (izquierda) */
    margin-top: 8px; 
    width: 577px    ;/* Añade un poco de espacio entre la imagen grande y la galería */
`;

export const ImageGallery = styled.img`
    height: 107px; /* Altura fija para las imágenes pequeñas */
    width: 107px; /* Anchura fija para las imágenes pequeñas */
    border-radius: 8px; /* Radio de la esquina para las imágenes pequeñas */
    margin-bottom: 5px; 
    margin-right: 10px;/* Espacio entre imágenes pequeñas */
    cursor: pointer;
`;

export const ProductImage = styled.img`
    height: 721px; /* Altura fija para la imagen grande */
    width: 577px; /* Anchura fija para la imagen grande */
    border-radius: 8px; /* Radio de la esquina para la imagen grande *//* Espacio entre la imagen grande y el contenedor de la galería */
`;

export const ProductDetails = styled.div`
    color: #4b4b4b;
    grid-area: auto;
    line-height: 24px;
    padding: 0px 12px;

    max-width: 500px;

    .title {
        color: #4b4b4b;
        font-family: DIN Next Rounded LT Pro Medium;
        font-size: 32px;
        grid-area: auto;
        line-height: 38.4px;
        margin: 0px 0px 8px;
        text-transform: capitalize;
        @media (max-width: 768px) {
            font-size: 8px;
        }
    }

    .subtitle {
        align-items: center;
        background-color:#ffffff;
        border-radius: 16px 16px 0px 0px;
        color:#58cc02;
        display: flex;
        font-family: DIN Next Rounded LT Pro Medium;
        grid-area: auto;
        line-height: 19.2px;
        padding: 2px 0px;
        text-align: left;
        text-transform: uppercase;
    }
    .price {
        align-items: center;
        color: #4b4b4b;
        display: flex;
        flex-wrap: wrap;
        font-family: DIN Next Rounded LT Pro Regular;
        font-size: 20px;
        grid-area: auto;
        line-height: 30px;
        margin: 0px 0px 16px;
    }

    .description {
        color:#4b4b4b;
        display: inline;
        font-size: 18px;
        grid-area: auto;
        line-height: 27px;
        text-align: left;
    }
`;