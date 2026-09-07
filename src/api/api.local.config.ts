import axios from 'axios';

export const localApiClient = axios.create({
  baseURL: '/datas',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default localApiClient;
