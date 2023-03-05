import React from 'react';
import { FaStar, FaChartBar, FaUserAlt } from 'react-icons/fa';

interface StatisticsProps {
    vote_average: number;
    vote_count: number;
    popularity: number;
}
export const Statistics = ({
    popularity,
    vote_average,
    vote_count,
}: StatisticsProps) => {
    return (
        <div className="flex gap-2 w-1/2  justify-between">
            <span className="text-textWhite text-center md:text-left text-sm flex  items-center gap-1">
                <FaStar className="text-red" /> {vote_average}
            </span>
            <span className="text-textWhite text-center md:text-left text-sm flex  items-center gap-1">
                <FaChartBar className="text-red" /> {vote_count}
            </span>
            <span className="text-textWhite text-center md:text-left text-sm flex  items-center gap-1">
                <FaUserAlt className="text-red" /> {popularity}
            </span>
        </div>
    );
};
