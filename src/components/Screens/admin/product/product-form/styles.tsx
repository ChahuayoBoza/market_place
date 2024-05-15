import styled from 'styled-components';

export const Form = styled.form`
    background-color: #f9f9f9;
    //padding: 20px;
    padding-right: 25px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
        padding-right: 10px; // Reducir el padding en pantallas pequeñas
    }
`;

export const InputGroup = styled.div`
    margin-bottom: 20px;
    @media (max-width: 768px) {
        margin-bottom: 15px; // Reducir el margen en pantallas pequeñas
    }
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Select = styled.select`
    width: 104.7%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
`;

export const CheckGroup = styled.div`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
`;

export const CheckboxContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px; 
    margin-bottom: 15px;
    padding: 15px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr); // 3 columnas en pantalla pequeña
    }
    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr); // 2 columnas en pantalla muy pequeña
    }
`;


export const InputCheckbox = styled.input`
    margin-right: 10px;
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
`;

export const TagsInputContainer = styled.div`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
`;

export const InputTag = styled.input`
    width: 95%;
    padding: 10px;
`;

export const Tag = styled.span`
    display: inline-block;
    padding: 5px;
    margin: 5px;
    background-color: #58cc02;
    border-radius: 3px;
`;

export const TagListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
`;

export const Button = styled.button`
    background-color: #58cc02;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    @media (max-width: 768px) {
        padding: 12px 24px; // Aumentar el padding para pantallas pequeñas
    }
`;