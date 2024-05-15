import styled from 'styled-components';

// Definir los breakpoints para dispositivos móviles
const mobileBreakpoint = '768px';

// Styled component para el contenedor principal
export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px; // Espaciado entre elementos
    justify-content: center;
`;

// Styled component para los items de las columnas
export const ColumnItem = styled.div`
    flex: 1 1 auto; // Esto permite que los elementos se expandan y se ajusten según el espacio disponible
    margin: 8px;
    
    @media (max-width: ${mobileBreakpoint}) {
        flex-basis: 100%; // En dispositivos móviles, cada elemento toma el ancho completo
    }

    @media (min-width: ${mobileBreakpoint}) {
        flex-basis: calc(50% - 16px); // En pantallas más grandes, dos elementos por fila
    }
`;