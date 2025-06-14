import axios from 'axios';

const api = axios.create({ baseURL:"http://localhost:5042/api"})

export default api;
