import { createAsyncThunk } from '@reduxjs/toolkit';
import { movieClient } from '../../api/movie-api';

interface Payload {
  query: string;
}
export const getMovies = createAsyncThunk(
  'get/movies',
  async ({ query }: Payload) => {
    if (query.length > 0) {
      const { data } = await movieClient.get('/search/movie', {
        params: {
          query,
        },
      });
      return data ? data : null;
    }
    const { data } = await movieClient.get('/movie/popular');

    return data ? data : null;
  }
);
