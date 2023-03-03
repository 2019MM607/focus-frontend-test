import React from 'react';
import { Dashboard, Details, Favorites, Profile } from '../pages';

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
  {
    path: 'profile',
    Component: Profile,
  },
];
