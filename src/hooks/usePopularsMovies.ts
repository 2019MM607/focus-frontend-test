import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/redux-hooks';
import { RootState } from '../redux/store';
import { getMovies } from '../redux/services/movies-thunk.service';

export const usePopularsMovies = (query: string) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const dispatch = useAppDispatch();
    const { movies } = useAppSelector((state: RootState) => state.movies);

    const fetchMovies = () => {
        setTimeout(() => {
            dispatch(getMovies({ query }));
            setIsLoading(false);
        }, 3000);
    };
    const refetch = () => {
        setIsLoading(true);
        fetchMovies();
    };
    useEffect(() => {
        fetchMovies();
    }, []);

    return { movies, refetch, isLoading };
};
