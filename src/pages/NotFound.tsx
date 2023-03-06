import React from 'react';
import { LoadAnimation } from '../components/app';
import notFound from '../../public/no-data.json';

const NotFound = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-4xl text-red font-bold text-center">
                Sorry, i don´t know this route
            </h1>
            ,
            <LoadAnimation animationData={notFound} />
        </div>
    );
};

export default NotFound;
