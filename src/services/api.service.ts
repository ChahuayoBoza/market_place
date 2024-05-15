import axios from "axios";

export const apiService = axios.create({
    baseURL: 'http://api.example.com/', // Coloca aquí la URL base de tu API
    headers: {
        'Content-Type': 'application/json',
    },
});