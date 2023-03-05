import React, { useState } from 'react';
import { MdDateRange } from 'react-icons/md';
import { AiOutlineBarChart, AiFillEye } from 'react-icons/ai';
import noImage from '/public/no-image.png';

import { Movie } from '../../interfaces/movie.interface';
import { motion } from 'framer-motion';
import { useMovieCardAnimation } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';

interface MovieCardProps {
    movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const { handleToggleInfo, isOpen, variants } = useMovieCardAnimation();

    return (
        <div className="bg-transparent">
            <div
                className="flex items-end rounded-lg flex-col"
                style={{
                    backgroundImage: movie?.poster_path
                        ? `url(${import.meta.env.VITE_IMAGE_BASEURL}/${
                              movie?.poster_path
                          })`
                        : `url(${noImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '400px',
                    width: '300px',
                }}
            >
                <AiFillEye
                    size={20}
                    className="m-2 text-textWhite"
                    onClick={handleToggleInfo}
                />
                <Link to={`/details/${movie.id}`}>
                    <motion.div
                        transition={{ duration: 0.5, bounce: 0 }}
                        initial="closed"
                        animate={isOpen ? 'open' : 'closed'}
                        variants={variants}
                        className="rounded-t-lg  w-full  bg-red/70 flex flex-col justify-center"
                    >
                        <div className="mx-2 flex flex-col gap-2">
                            <h1 className="text-textWhite text-lg">
                                {movie?.original_title}
                            </h1>
                            <p className="text-textWhite text-xs">
                                {movie?.overview}
                            </p>
                            <span className="text-textWhite text-xs flex items-center gap-1">
                                <MdDateRange />
                                {movie?.release_date}
                            </span>
                            <span className="mb-1 text-textWhite text-xs flex items-center gap-1">
                                <AiOutlineBarChart /> {movie?.vote_average}
                            </span>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default MovieCard;
