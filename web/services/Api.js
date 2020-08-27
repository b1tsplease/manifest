import axios from 'axios';

const BASE_URL = 'https://api-internet-pela-educacao.herokuapp.com';

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
