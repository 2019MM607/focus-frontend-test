import React from 'react';
import { Cast } from '../../interfaces/movie-cast.interface';
import noImageCast from '/public/no-image-cast.jpg';

interface CastItemProps {
    item: Cast;
}
export const CastItem = ({ item }: CastItemProps) => {
    return (
        <div className="flex flex-col justify-center items-center border  border-red rounded-xl  p-5">
            <div className="relative flex flex-col items-center rounded-[20px] w-full ">
                <div className="relative flex  w-full justify-center ">
                    <div className="absolute -bottom-12  border-red border-[4px] flex h-[87px] w-[87px] items-center justify-center rounded-full ">
                        <img
                            className="h-full w-full rounded-full object-cover "
                            alt="actor"
                            src={
                                item.profile_path
                                    ? `${import.meta.env.VITE_IMAGE_BASEURL}${
                                          item?.profile_path
                                      }`
                                    : noImageCast
                            }
                        />
                    </div>
                </div>
                <div className="mt-16 flex flex-col items-center">
                    <h4 className="text-xl font-bold text-navy-700 dark:text-white">
                        {item?.name}
                    </h4>
                    <p className="text-base font-normal text-gray-600">
                        as {item?.character}
                    </p>
                </div>
            </div>
        </div>
    );
};
