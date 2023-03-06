import React from 'react';
// import Dashboard from '../pages/Dashboard';
// import Details from '../pages/Details';
// import Favorites from '../pages/Favorites';

//lazy with chunkname
const Dashboard = React.lazy(
    () => import(/* webpackChunkName: "dashboard" */ '../pages/Dashboard')
);
const Details = React.lazy(
    () => import(/* webpackChunkName: "details" */ '../pages/Details')
);
const Favorites = React.lazy(
    () => import(/* webpackChunkName: "favorites" */ '../pages/Favorites')
);

export interface Route {
    path: string;
    Component: React.LazyExoticComponent<() => JSX.Element>;
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
