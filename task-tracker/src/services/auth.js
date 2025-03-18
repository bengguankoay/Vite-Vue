import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const API_URL = 'https://api.escuelajs.co/api/v1/auth/login';
// const API_URL = 'https://dummyjson.com/auth';

export const login = async (credentials) => {
  const response = await axios.post(`${API_URL}`, credentials, {
    headers: { 'Content-Type': 'application/json' }
  });
  const token = response.data.access_token;
  localStorage.setItem('token', token);
  return jwtDecode(token);
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const isAuthenticated = () => {
  const token = getToken();
  if (!token) return false;

  const { exp } = jwtDecode(token);
  return Date.now() < exp * 1000;
};
