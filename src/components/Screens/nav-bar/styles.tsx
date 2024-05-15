import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyle = styled(Link)`
  text-decoration: none; 
  color: inherit;
`;

export const Nav = styled.nav`
  background-color: #fff;
  color: #4b4b4b;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 60px;
  top: 0;
  z-index: 1000;
`;

export const Hamburger = styled.div`
    display: block;
    position: absolute;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1; // Esto asegura que los elementos se centren

  /* @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px; // Ajusta esto según el tamaño de tu barra de navegación
    opacity: 1;
    transition: all 0.5s ease;
    background: #1c2237;
  } */

  `;


export const NavItem = styled.a`

  text-decoration: none;
  margin: 0 15px; 
  align-items: center;
  border-radius: 16px;
  color:#58cc02;
  display: flex;
  font-family: 'DIN Next LT Pro';
  font-weight: 900;
  grid-area: auto;
  letter-spacing: 0.64px;
  line-height: 26px;
  padding: 4px 12px;
  text-align: left;
  font-size: 22px;

    @media (max-width: 768px) {
    /* Estilos para pantallas pequeñas */
    font-size: 18px; /* Tamaño de fuente reducido */
    margin: 0 10px; /* Espaciado reducido */
  }
  `;

export const IconContainer = styled.span`
  color: #58cc02; // Ajusta el color de la lupa si es necesario
  font-size: 1.5rem;
  cursor: pointer;
  margin-right: 50px;

  @media (max-width: 768px){
    margin-right: 10px;
  }

`;

export const DropDownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px; // Ajusta esto según el tamaño de tu barra de navegación
  right: 0; // Añade esta línea
  background-color: #fff; // Elige el color de fondo que prefieras
  width: 100%; // Ajusta esto según el ancho que prefieras
  z-index: 999; // Asegúrate de que el menú desplegable se muestre por encima de otros elementos
`;
