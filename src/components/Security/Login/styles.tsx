import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Background = styled.div`
  position: fixed;
  top: -50vmin;
  left: -50vmin;
  width: 100vmin;
  height: 100vmin;
  border-radius: 47% 53% 61% 39% / 45% 51% 49% 55%;
  background: #65c8ff;

  &::after {
    content: "";
    position: inherit;
    right: -50vmin;
    bottom: -55vmin;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    background: #143d81;
  }
`;

export const Card = styled.div`
  overflow: hidden;
  position: relative;
  z-index: 3;
  width: 94%;
  margin: 0 20px;
  padding: 170px 30px 54px;
  border-radius: 24px;
  background: #ffffff;
  text-align: center;
  box-shadow: 0 100px 100px rgb(0 0 0 / 10%);

  &::before {
    content: "";
    position: absolute;
    top: -880px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    background: #58cc02;
  }

  @media (min-width: 500px) {
    margin: 0;
    width: 360px;
  }
`;

export const Logo = styled.img`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  width: 64px;
  height: 64px;
`;

export const Title = styled.h2`
  font-size: 22px;
  font-weight: 400;
  margin: 0 0 38px;
  color: rgba(0, 0, 0, 0.38);
`;

export const Form = styled.form`

  margin: 0 auto; /* Para centrar el formulario horizontalmente */
  max-width: 360px; 
  display: flex;
  flex-direction: column;
  align-items: center; 
  gap: 12px;
`;

export const Input = styled.input`
  
  width: 85%;
  height: 56px;
  border-radius: 28px;
  font-size: 16px;
  font-family: inherit;
  border: 0;
  padding: 0 24px;
  color: #222222;
  background: #ededed;

  &::placeholder {
    color: rgba(0, 0, 0, 0.28);
  }
`;

export const Button = styled.button`
  width: 80%;
  height: 56px;
  border: 0;
  color: #f9f9f9;
  background: #58cc02;
  display: grid;
  place-items: center;
  font-weight: 500;
  cursor: pointer;
  border-radius: 20px;
`;

export const Footer = styled.footer`
  color: #a1a1a1;
`;

export const FooterLink = styled.a`
  color: #58cc02;
`;
