import styled from "styled-components";

// Estilos para el fondo ondulado del pie de página
export const Container = styled.div`
  width: 100%;
  margin-top: 10%;
`;

export const ImgTopFooter = styled.img`
  margin-bottom: -125px;
`;
// Contenedor del pie de página
export const FooterContainer = styled.footer`
  background-color: #58cc02; // Tu color de fondo
  padding: 50px 0; // Ajusta el padding a tu diseño
  color: white; // Ajusta el color según tu diseño
`;

// // Estilo para el logotipo en el pie de página 
// export const FooterLogo = styled(Logo)`
//   display: block;
//   margin: 0 auto;
// `;

// Estilo para el contenedor de enlaces
export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px; // Ajusta esto según el ancho máximo de tu contenido
  margin: 0 auto;
  padding: 0 20px;
`;

// Estilo para la lista de enlaces
export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px; // Espacio entre los enlaces

  // Aquí puedes añadir estilos para tus enlaces, como colores, hover effects, etc.
  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

// Estilo para el texto de derechos reservados
export const CopyrightText = styled.p`
  text-align: center;
  margin-top: 20px;
`;

