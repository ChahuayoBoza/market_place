import styled from "styled-components";

export const Card = styled.div`
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(88, 204, 2, 0.5);
    width: auto; /* Tamaño mediano */
    margin: auto; /* Centrar horizontalmente */
    margin-top: 100px; /* Ajuste vertical */
    padding: 20px;
    @media (max-width: 480px) {
        margin: 20px; 
        margin-top: 100px;
    }
    
`;
