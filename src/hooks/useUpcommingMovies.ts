import { useEffect, useState } from 'react';
import { movieClient } from '../api/';
import { IMovie, Movie } from '../interfaces/movie.interface';

export const useUpcommingMovies = () => {
    const [upComings, setUpcomings] = useState<Movie[]>([]);
    const getUpcommings = async () => {
        const { data } = await movieClient.get<IMovie>('/movie/upcoming');
        setUpcomings(data?.results);
    };

    useEffect(() => {
        getUpcommings();
    }, []);

    return {
        upComings,
    };
};
