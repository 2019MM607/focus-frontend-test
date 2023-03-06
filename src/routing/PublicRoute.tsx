import React, { useEffect } from 'react';
import { Dashboard } from '../pages';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/redux-hooks';
import { RootState } from '../redux/store';
import { autoLogin } from '../redux/slice/auth.slice';

export const PublicRoute = () => {
    const { isAuthenticated } = useAppSelector(
        (state: RootState) => state.auth
    );

    return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};
