import React from 'react';
import Dashboard from '../pages/Dashboard';
import Details from '../pages/Details';
import Favorites from '../pages/Favorites';

export interface Route {
    path: string;
    Component: () => JSX.Element;
}

export const protectedRoutes: Route[] = [
    {
        path: 'dashboard',
        Component: Dashboard,
    },
    {
        path: 'details/:id',
        Component: Details,
    },
    {
        path: 'favorites',
        Component: Favorites,
    },
];
