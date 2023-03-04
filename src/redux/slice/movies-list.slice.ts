import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IMovie, Movie } from '../../interfaces/movie.interface';
import { getMovies } from '../services/movies-thunk.service';

export interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: [],
};
export const moviesListSlice = createSlice({
  name: 'moviesList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getMovies.fulfilled,
      (state, action: PayloadAction<IMovie>) => {
        state.movies = action.payload.results;
      }
    );
  },
});

export default moviesListSlice.reducer;
