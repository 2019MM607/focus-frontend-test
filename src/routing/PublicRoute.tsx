import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import { useAppSelector } from '../app/redux-hooks';
import { RootState } from '../redux/store';

export const PublicRoute = () => {
    const { isAuthenticated } = useAppSelector(
        (state: RootState) => state.auth
    );

    return isAuthenticated ? <Navigate to="/dashboard" /> : <Outlet />;
};
