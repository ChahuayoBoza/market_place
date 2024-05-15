import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100%);
`;

export const ContainerCards= styled.div`

    display: grid;
    gap: 16px; /* Espacio entre las tarjetas */
    padding: 2% 10%; /* Ajusta el padding como necesites */

    /* Esto crea dos columnas en pantallas de menos de 768px */
    grid-template-columns: repeat(2, 1fr); 

    @media (min-width: 768px) {
      /* Tablet: 2 tarjetas por fila */
      grid-template-columns: repeat(2, minmax(400px, 1fr));
      gap: 24px;
    }

    @media (min-width: 1024px) {
      /* Desktop: 3 tarjetas por fila */
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
`;

export const Paginator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  border: 1px solid #58cc02;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  transition: background-color 0.3s;

  @media (max-width: 768px) {
      margin: 0px;      
    }

  &:disabled {
    color: #999;
    cursor: not-allowed;
    background: #eee;
  }

  &:not(:disabled):hover {
    background-color: #f0f0f0;
  }

  &.active {
    background-color: #007bff;
    color: white;

    &:hover {
      background-color: #0056b3;
    }
    
  }
`;