import React, { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/redux-hooks';
import { RootState } from '../redux/store';
import { autoLogin } from '../redux/slice/auth.slice';

interface PrivateRouteProps {
    children: React.ReactNode;
}
export const PrivateRoute = ({ children }: PrivateRouteProps) => {
    const { isAuthenticated } = useAppSelector(
        (state: RootState) => state.auth
    );

    return !isAuthenticated ? <Navigate to="/login" /> : <>{children}</>;
};
