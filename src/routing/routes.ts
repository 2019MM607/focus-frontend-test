import React from 'react';
const Dashboard = React.lazy(
    () => import(/* webpackChunkName: "Dashboard" */ '../pages/Dashboard')
);
const Details = React.lazy(
    () => import(/* webpackChunkName: "Details" */ '../pages/Details')
);
const Favorites = React.lazy(
    () => import(/* webpackChunkName: "Favorites" */ '../pages/Favorites')
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
