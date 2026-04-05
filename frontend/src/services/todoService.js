import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export const getTodos = () => axios.get(API);

export const createTodo = (data) => axios.post(API, data);

export const updateTodo = (id, data) => axios.put(`${API}/${id}`, data);

export const deleteTodo = (id) => axios.delete(`${API}/${id}`);

export const getTodo = (id) => axios.get(`${API}/${id}`);