import React, { useLayoutEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useMovie } from '../hooks';
import { CoverContainer } from '../components/Details';
import { MoviesList } from '../components/Dashboard';
import { LoadAnimation, Title } from '../components/app';
import { CastList } from '../components/Details/CastList';
import pandaAnimation from '../../public/panda.json';

const Details = () => {
    const { id } = useParams<{ id: string }>();
    const { movie, cast, relateds, trigger, isLoading } = useMovie(id);

    useLayoutEffect(() => {
        trigger();
        scrollTo(0, 0);
    }, [id]);

    return (
        <>
            {isLoading ? (
                <div className="flex justify-center items-center h-screen">
                    <LoadAnimation animationData={pandaAnimation} />
                </div>
            ) : (
                <div>
                    <CoverContainer movie={movie} />
                    <div className="mt-10 ">
                        {cast.length > 0 && (
                            <>
                                <Title title="Cast" />
                                <CastList cast={cast} />
                            </>
                        )}
                    </div>

                    <div className="mt-10">
                        {relateds.length > 0 && (
                            <>
                                <Title title="Related Movies" />
                                <MoviesList movies={relateds} />
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Details;
