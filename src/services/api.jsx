import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/blog/v1',
    timeout: 1000
});

export const fetchPublications = () => api.get('/publications');
export const createPublication = (data) => api.post('/publications', data);
export const updatePublication = (id, data) => api.put(`/publications/${id}`, data);
export const deletePublication = (id) => api.delete(`/publications/${id}`);

export const fetchComments = () => api.get('/comments');
export const createComment = (data) => api.post('/comments', data);
export const updateComment = (id, data) => api.put(`/comments/${id}`, data);
export const deleteComment = (id) => api.delete(`/comments/${id}`);

export default api;
