import axios from 'axios';
import { Api } from '../interfaces/api';

function createApi(): Api {
  return axios.create({
    baseURL: `/api/`,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });
}

export default createApi;
