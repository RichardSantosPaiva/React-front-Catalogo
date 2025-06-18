import axios from 'axios'

const api = axios.create({
    baseURL:"http://localhost:5042/api",
    withCredentials: true,
})

api.interceptors.response.use(
  response => response,
  error => {
    // Se a resposta for 401 (não autorizado), redireciona para o login
    if (error.response && error.response.status === 401) {
      window.location.href = '/login'; // ou use o router se estiver usando react-router
    }
    return Promise.reject(error);
  }
);


export default api