import React, { useEffect, useState } from 'react';
import useApiRequest from '../../../api';
import { useAuth } from "../../../context/auth/Auth.context";
import { User } from '../../../api/auth/user.interface';
import { Background, Button, Card, Container, Footer, FooterLink, Form, Input, Logo, Title } from './styles';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import useApi from '../../../hooks/use-api';

interface LoginRequest {
  email: string,
  password: string,   
}

interface LoginResponse {
    id: string, 
    email: string,
    token: string
}

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const { apiRequest } = useApiRequest();
  const { data, fetchData, error, loading } = useApi();
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {

      const dataReq: LoginRequest = {email, password }
      
      const result = await apiRequest<LoginRequest, LoginResponse>('auth/login', 'POST', dataReq);
      
      if (result.data && 'id' in result.data && 'email' in result.data && 'token' in result.data) {        
        const userData: User = {
          id: result.data.id,
          email: result.data.email,
          token: result.data.token
        };
        
        login(userData);
        navigate('/');
      }  
    } catch (error) {
      console.error('Error al iniciar sesión', error);
    }
  };

  const handleLoginSuccess = async (credentialResponse: any) => {
    try {
      await fetchData({
        endpoint: '/auth/google',
        method: 'POST',
        data: { token: credentialResponse.credential }
      });
    } catch (error) {
      console.error('Error al iniciar sesión con Google', error);
    }
  };

  // Efecto para manejar la respuesta de login
  useEffect(() => {
    if (data && data.id && data.email && data.token) {
      login(data); // Asignar los datos de usuario al contexto de autenticación
      navigate('/'); // Navegar al inicio
    }
    if (error) {
      console.error('Login fallido:', error);
    }
  }, [data, error, login, navigate]);

  // const handleGoogleLogin = () => {
  //   window.location.href = `${process.env.REACT_APP_API_URL}/auth/google`;
  // };



  return (
    // <Container>
    //   <Card>
    //     <Logo src="ruta/al/logo.png" alt="Logo" />
    //     <Title>¡Bienvenido de nuevo!</Title>
    //     <Form onSubmit={handleLogin}>
    //       <Input  
    //         type="email" 
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         placeholder="Correo electronico" />
    //       <Input
    //         type="password" 
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         placeholder="Contraseña" />
    //       <Button type="submit">Ingresar</Button>
    //       {/* <Button onClick={handleGoogleLogin} type="button">Ingresar con Google</Button> */}
    //     </Form>
    //     <Footer>
    //       ¿Aún no tienes cuenta? <FooterLink href="/signup">Registrate</FooterLink>
    //     </Footer>
    //   </Card>
    // </Container>    
      <Container>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
            handleLoginSuccess(credentialResponse);
          }}
          onError={() => {
              console.log('Login Failed');
          }}
        />
      </Container>
  );

};

export default LoginPage;
