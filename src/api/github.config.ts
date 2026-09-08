import axios from 'axios';

export const githubApiClient = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

githubApiClient.interceptors.request.use(
  (config) => {
    const token = import.meta.env.VITE_GITHUB_TOKEN;
    if (!token) {
      console.log('Axios Interceptor : Error no Token stored !');
      return config;
    }

    try {
      config.headers.Authorization = `Bearer ${token}`;
    } catch (e) {
      console.log(`Axios Interceptor error : ${e}`);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default githubApiClient;
