import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/api',
});

axios.defaults.baseURL = 'http://localhost:3001/api';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN; // if you're using any token
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

export const addUser = async (user) => {
  const response = await api.post('/users', user);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await api.put(`/users/${id}`, user);
  return response.data;
};

export const deleteUser = async (id) => {
  const response = await api.delete(`/users/${id}`);
  return response.data;
};

