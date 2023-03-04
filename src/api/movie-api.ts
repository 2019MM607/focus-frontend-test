import axios from 'axios';

export const movieClient = axios.create({
  baseURL: import.meta.env.VITE_API_MOVIES || 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_API_KEY || 'e49d12e9045c1d84386d348c7dc2d991',
  },
});
