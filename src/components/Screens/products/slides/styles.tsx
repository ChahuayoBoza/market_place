import styled from 'styled-components';


export const SliderContainer = styled.div`
    color:#4b4b4b;
    grid-area: auto;
    line-height: 24px;
    height: 450px;
    margin-top: -15px;

    @media (max-width: 768px) {
        height: 80%;     
    }
`;

export const ImageSlider = styled.img`
    width: 100%;
    height: 100%;

    @media (max-width: 768px) {
        height: 80%;     
    }
`;