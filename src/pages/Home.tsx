import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center flex-col ">
            <div className=" mb-5">
                <h2 className="text-red text-3xl p-1">My movies app</h2>
                <span className="text-textWhite font-semibold">
                    Wich movie you want to see?
                </span>
            </div>

            <div className="flex flex-col items-start mt-5">
                <button className="text-textWhite bg-gradient-to-r from-from to-red p-2 rounded-md shadow-md backdrop-brightness-90">
                    <Link to="dashboard">Get started for free</Link>
                </button>
            </div>
        </div>
    );
};
