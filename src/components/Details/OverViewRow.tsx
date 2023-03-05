import React from 'react';

interface OverViewRowProps {
    overview: string;
}
export const OverViewRow = ({ overview = '' }: OverViewRowProps) => {
    return (
        <div className="flex gap-2 w-full">
            <span className="text-textWhite text-justify md:text-left text-sm flex  items-center gap-1">
                {overview}
            </span>
        </div>
    );
};
