import React, { useState } from 'react';
import { Movie } from '../../interfaces/movie.interface';
import noImage from '/public/no-image.png';
import {
    FaCalendarDay,
    FaEye,
    FaHeart,
    FaSadCry,
    FaClosedCaptioning,
    FaRegTimesCircle,
} from 'react-icons/fa';
import { OverViewRow } from './OverViewRow';
import { Statistics } from './Statistics';
import { Alert } from '../app';
import {
    isFavoriteItem,
    toggleFavoriteItem,
} from '../../helpers/verifyFavorites';
import { useFavorites } from '../../hooks';

interface CoverContainerProps {
    movie: Movie | null;
}

export const CoverContainer = ({ movie }: CoverContainerProps) => {
    const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false);
    const { handleFavorite, isFavorite } = useFavorites(movie as Movie);

    const handleToggleAlert = () => {
        setIsAlertOpen(!isAlertOpen);
    };
    return (
        <div className=" p-2 mt-20 flex flex-col md:flex-row ">
            <div className="md:w-1/2 w-full flex justify-center ">
                <img
                    src={
                        movie?.poster_path
                            ? `${import.meta.env.VITE_IMAGE_BASEURL}${
                                  movie?.poster_path
                              }`
                            : noImage
                    }
                    alt={movie?.title}
                    className="w-[400px] rounded-md shadow-md"
                />
            </div>

            <div className="md:w-1/2  w-full gap-1 flex  flex-col  justify-center items-center md:mx-5">
                <div className="flex gap-2 w-full justify-center">
                    <h1 className="text-red text-2xl">
                        {movie?.original_title}
                    </h1>
                </div>
                <div className="flex gap-2 ">
                    {movie?.genres.map((genre) => (
                        <span key={genre.id} className="text-textWhite text-sm">
                            {genre.name}
                        </span>
                    ))}
                </div>
                <div className="flex gap-2">
                    <span className="text-textWhite text-sm flex  items-center gap-1">
                        <FaCalendarDay className="text-red" />{' '}
                        {movie?.release_date}
                    </span>
                </div>

                <OverViewRow overview={movie?.overview || ''} />

                <Statistics
                    vote_average={movie?.vote_average || 0}
                    vote_count={movie?.vote_count || 0}
                    popularity={movie?.popularity || 0}
                />
                <div className="border w-full flex flex-col mt-5 gap-2">
                    <button
                        onClick={handleToggleAlert}
                        className="bg-red text-white p-2 md:w-1/2 w-full rounded-md flex justify-center items-center gap-2"
                    >
                        <FaEye />
                        WATCH NOW
                    </button>

                    <button
                        onClick={handleFavorite}
                        className="border border-red text-red p-2 md:w-1/2 rounded-md flex justify-center items-center gap-2"
                    >
                        <FaHeart
                            className={`${
                                isFavorite ? 'text-red' : 'text-textWhite'
                            }`}
                        />
                        {isFavorite
                            ? 'REMOVE FROM FAVORITES'
                            : 'ADD TO FAVORITES'}
                    </button>
                </div>
            </div>

            {isAlertOpen && (
                <Alert>
                    <div className=" mx-10 bg-red rounded-lg p-4 flex flex-col">
                        <div className="w-full flex justify-end text-textWhite">
                            <FaRegTimesCircle
                                size={20}
                                onClick={handleToggleAlert}
                            />
                        </div>
                        <div className="flex gap-2 text-textWhite">
                            <h1 className=" text-2xl">Sorry...</h1>
                            <FaSadCry size={30} />
                        </div>
                        <span className="text-textWhite">
                            Hey friend, I have to remind you that this button is
                            only for UI, since the API does not provide the
                            movie.
                        </span>
                    </div>
                </Alert>
            )}
        </div>
    );
};
