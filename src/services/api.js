import axios from 'axios';

const apiKey = process.env.VUE_APP_API_KEY;

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: apiKey,
  },
});

export default api;
