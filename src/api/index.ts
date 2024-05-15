import { useState } from "react";
import axios, { AxiosRequestConfig, Method } from "axios";
import { useAuth } from "../context/auth/Auth.context"; 

interface ApiResponse<ResponseType = any> {
  data?: ResponseType
  error?: string;
}

const useApiRequest = () => {

  const [error, setError] = useState<string | null>(null);
  const { authToken, setAuthToken } = useAuth();
  
  const apiRequest = async <RequestType = any, ResponseType = any>(
    url: string, 
    method: Method,
    payload?: RequestType, 
  ): Promise<ApiResponse<ResponseType>> => {

    try {

      const headers: Record<string, string> = {};

      if (authToken) {
        headers['Authorization'] = `Bearer ${authToken}`;
      }

      const config: AxiosRequestConfig = {
        method,
        url: `http://localhost:3000/api/${url}`,
        headers,
        ...(method !== "get" && method !== "delete" && { data: payload }),
      };

      const response = await axios(config);

      if (url.endsWith('login') || url.endsWith('register')) {
        if (response.data.token && response.data.user) {
          setAuthToken(response.data.token);
          // Suponiendo que response.data.user contenga los datos del usuario
          localStorage.setItem('authToken', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.user));
        }
      }

      return { data: response.data };
      
    } catch (error: any) {
      setError(error.message || 'An unexpected error occurred');
      return { error: error.message || 'An unexpected error occurred' };
    }
  };

  return { apiRequest, error };
};

export default useApiRequest;

