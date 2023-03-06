import React, { useLayoutEffect, useState } from 'react';

import { Movie } from '../interfaces/movie.interface';
import { getFavorites } from '../helpers/local-storage-favorites';
import { MoviesList } from '../components/Dashboard';
import { Title } from '../components/app';

import { LoadAnimation } from '../components/app';
import notFound from '../../public/no-data.json';

const Favorites = () => {
    const [favorites, setFavorites] = useState<Movie[]>([]);

    useLayoutEffect(() => {
        setFavorites(getFavorites());
    }, []);

    return (
        <>
            {favorites.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-screen">
                    <h1 className="text-4xl text-red font-bold text-center">
                        Sorry, you don´t have favorites yet
                    </h1>

                    <LoadAnimation animationData={notFound} />
                </div>
            ) : (
                <div>
                    <div className="mt-5">
                        <Title title="Favorites" />
                        <MoviesList movies={favorites} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Favorites;
