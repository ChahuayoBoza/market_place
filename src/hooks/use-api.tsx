import { useState, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

type RequestParams = {
  endpoint: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: any;
  headers?: AxiosRequestConfig['headers'];
};

const useApi = () => {
    const baseUrl = 'http://localhost:3000/api';
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchData = useCallback(async (params: RequestParams) => {
        setLoading(true);
        setError(null);

        try {
        const response = await axios({
            url: `${baseUrl}${params.endpoint}`,
            method: params.method || 'GET',
            headers: params.headers || { 'Content-Type': 'application/json' },
            data: params.data || undefined, // Cambia 'null' por 'undefined'
        });

        setData(response.data);
        } catch (err) {
        setError(err);
        } finally {
        setLoading(false);
        }
    }, []);

    return { data, error, loading, fetchData };
};

export default useApi;
