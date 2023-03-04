import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/redux-hooks';
import { RootState } from '../redux/store';
import { getMovies } from '../redux/services/movies-thunk.service';

export const usePopularsMovies = (query: string) => {
  const dispatch = useAppDispatch();
  const { movies } = useAppSelector((state: RootState) => state.movies);
  const refetch = () => dispatch(getMovies({ query }));
  useEffect(() => {
    dispatch(getMovies({ query }));
  }, []);

  return { movies, refetch };
};
