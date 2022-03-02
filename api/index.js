import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// API.interceptors.request.use( (req) => {
//     if (localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
//     return req;
// });


// USER
export const getUser = () => API.get('/auth/get')
export const userLogin = (user) => API.post('/auth/signin', userInfo)
export const userRegister = (userInfo) => API.post('/auth/signup', userInfo)

// Branches????? is it a branch or is it a post?
export const getBranches = () => API.get('/posts');
export const createBranches = (newPost) => API.post('/posts', newPost);
export const editBranch = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost)