import React, { useLayoutEffect, useState } from 'react';
import { Layout } from './Layout';
import { useFavorites } from '../hooks';
import { Movie } from '../interfaces/movie.interface';
import { getFavorites } from '../helpers/verifyFavorites';
import { MoviesList } from '../components/Dashboard';
import { Title } from '../components/app';

export const Favorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useLayoutEffect(() => {
        setFavorites(getFavorites());
    }, []);

    return (
        <Layout>
            <div className="mt-5">
                <Title title="Favorites" />
                <MoviesList movies={favorites} />
            </div>
        </Layout>
    );
};
