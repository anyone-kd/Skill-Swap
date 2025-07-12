// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1', // change to your backend URL
  withCredentials: true, // allow sending cookies (if used for auth)
});

export default api;
