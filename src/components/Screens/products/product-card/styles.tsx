import styled from "styled-components";

export const ProductItem = styled.li`
    color:#4b4b4b;
    display: list-item;
    grid-area: auto;
    line-height: 24px;
    padding: 12px;
    text-align: left;
    list-style: none;    
`;

export const ProductImage = styled.img`
    /* width: 393px; */
    width: 100%;
    /* height: 492px; */
    height: auto;
    background-color: #f7f7f7;
    border-radius: 26px;
    color: #4b4b4b;
    display: inline;
    grid-area: auto;
    margin: 0px 0px 12px 0px;
    text-align: left;

    @media (min-width: 780px) {
        width: 393px; // Cuando la pantalla sea mayor de 780px, la imagen tendrá un ancho fijo de 393px
        height: 492px; // La altura también será fija
    }
`;

export const ProductTitle = styled.h3`
    text-decoration: none;
    color:#4b4b4b;
    width: 100%;
    font-family: 'DIN Next LT Pro';
    font-size: 24px;
    grid-area: auto;
    line-height: 28.8px;
    margin: 0px 0px 4px;
    text-align: left;
    text-transform: capitalize;

    @media (max-width: 480px) {
    font-size: 20px; // Haces la fuente más pequeña
    line-height: 20px; // Ajustas el line-height correspondientemente
    max-height: 48px; // Doble del line-height para asegurar dos líneas
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    }
`;

export const ProductPrice = styled.span`
    font-family: 'DIN Next LT Pro';
    color:#4b4b4b;
    display: inline;
    font-size: 24px;
    grid-area: auto;
    line-height: 36px;
    text-align: left;
`;


export const CardButton = styled.button`
    position: absolute;
    bottom: 140px; /* Ajusta la posición del botón en la parte inferior */
    left: 50%; /* Centra el botón horizontalmente */
    transform: translateX(-50%); /* Centra el botón horizontalmente */
    display: none; /* Oculta el botón de forma predeterminada */

    width: 20%;
    padding: 10px;
    background-color: a285aa;
    color: #fff;
    border: 0;
    border-bottom: 4px solid rgb(140, 110, 145);
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    transition: border-bottom-color 0.3s ease;
    margin-top: 10px;
    font-weight: bold;
    font-size: 15px;
    font-family: DIN Next Rounded LT Pro Bold;   

    &:hover {
        background-color: #a285aa;
        color: #000;
    }

    ${ProductImage}:hover + & {
        display: block; /* Muestra el botón cuando se pasa el mouse sobre el card */
    }
`;

export const Icon = styled.div`
  margin-right: 5px;
`;

