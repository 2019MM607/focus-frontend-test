import React, { useEffect, useState } from 'react';
import { Movie } from '../interfaces/movie.interface';
import { movieClient } from '../api/movie-api';
import { Cast } from '../interfaces/movie-cast.interface';

export const useMovie = (id: string | undefined) => {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [cast, setCast] = React.useState<Cast[]>([]);
    const [relateds, setRelateds] = React.useState<Movie[]>([]);

    const getMovieDetails = async () => {
        const { data } = await movieClient.get<Movie>(`/movie/${id}`);
        setMovie(data);
    };

    const getMovieCast = async () => {
        const { data } = await movieClient.get(`/movie/${id}/credits`);
        data.cast.length > 10 && data.cast.splice(10, data.cast.length - 10);

        setCast(data.cast);
    };

    const getRelatedMovies = async () => {
        const { data } = await movieClient.get(`/movie/${id}/recommendations`);
        setRelateds(data.results);
    };

    const trigger = () => {
        getMovieDetails();
        getMovieCast();
        getRelatedMovies();
    };

    useEffect(() => {
        trigger();
    }, []);

    return {
        movie,
        cast,
        relateds,
        trigger,
    };
};
