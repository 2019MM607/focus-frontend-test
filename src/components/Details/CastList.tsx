import React from 'react';

import { Cast } from '../../interfaces/movie-cast.interface';
import { CastItem } from './CastItem';

interface CastListProps {
    cast: Cast[];
}
export const CastList = ({ cast }: CastListProps) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 b gap-3 mx-10 mt-5">
            {cast.map((item) => (
                <CastItem key={item?.id} item={item} />
            ))}
        </div>
    );
};
