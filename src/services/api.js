// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Backend API URL
    timeout: 10000, // Timeout for requests
});

export const getLessons = async () => {
    try {
        const response = await api.get('/lessons');
        return response.data;
    } catch (error) {
        console.error('Error fetching lessons:', error);
        throw error;
    }
};
