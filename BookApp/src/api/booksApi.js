import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.18:3000', // Cambia esta URL según el entorno (puerto y dirección IP del servidor)
});

export default api;
