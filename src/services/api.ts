import axios from 'axios';

const api = axios.create({
  baseURL: 'https://deploygobarber.herokuapp.com/',
});

export default api;
