import axios from 'axios';


const api = axios.create({
    baseURL: 'https://localhost:44341'
});

//função para passar o JWT como interceptor nas requisições
// api.interceptors.request.use(async config => {
//     const token = sessionStorage.getItem('token');
//       config.headers = {'Access-Control-Allow-Headers': 'authorization', 'accept': 'application/json, text/plain, */*', 'content-type': 'application/json', 'authorization': `Bearer ${JSON.parse(token)}`};
//     }
//     return config;
//   });

export default api;