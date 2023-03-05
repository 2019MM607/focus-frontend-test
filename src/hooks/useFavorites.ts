import React, { useState } from 'react';
import { isFavoriteItem, toggleFavoriteItem } from '../helpers/verifyFavorites';
import { Movie } from '../interfaces/movie.interface';

export const useFavorites = (movie: Movie) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const handleFavorite = () => {
        setIsFavorite(!isFavorite);
        toggleFavoriteItem(movie, !isFavorite);
    };

    React.useEffect(() => {
        setIsFavorite(isFavoriteItem(movie?.id));
    }, [movie]);

    return {
        isFavorite,
        handleFavorite,
    };
};
