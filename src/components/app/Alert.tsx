import React from 'react';
interface AlertProps {
    children: React.ReactNode;
}

export const Alert = ({ children }: AlertProps) => {
    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-background/90 z-30 flex justify-center items-center">
            {children}
        </div>
    );
};
