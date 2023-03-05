import { Movie } from '../interfaces/movie.interface';

export const isFavoriteItem = (id: number = 0) => {
    const storage: Movie[] = JSON.parse(
        localStorage.getItem('favorites') || '[]'
    );
    return storage.some((item) => item.id === id);
};

export const toggleFavoriteItem = (item: Movie, isFavorite: boolean) => {
    const storage: Movie[] = JSON.parse(
        localStorage.getItem('favorites') || '[]'
    );
    if (isFavorite) {
        const newStorage = [...storage, item];
        localStorage.setItem('favorites', JSON.stringify(newStorage));
    } else {
        const index = storage.findIndex((i) => i.id === item.id);
        storage.splice(index, 1);
        localStorage.setItem('favorites', JSON.stringify(storage));
    }
};

export const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
};
