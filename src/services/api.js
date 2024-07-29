import axios from 'axios';

const apiKey = '469666465cd8b9f537cf360c1ef82d6d';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export default api;
