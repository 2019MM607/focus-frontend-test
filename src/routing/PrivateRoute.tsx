import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/redux-hooks';
import { RootState } from '../redux/store';

interface PrivateRouteProps {
    children: React.ReactNode;
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated } = useAppSelector(
        (state: RootState) => state.auth
    );

    return !isAuthenticated ? <Navigate to="/login" /> : <>{children}</>;
};
