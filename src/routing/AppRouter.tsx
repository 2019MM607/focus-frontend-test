import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Home = React.lazy(
    () => import(/* webpackChunkName: "HomePage" */ '../pages/Home')
);
const Login = React.lazy(
    () => import(/* webpackChunkName: "Login" */ '../pages/Login')
);
const Layout = React.lazy(
    () => import(/* webpackChunkName: "Layout" */ '../pages/Layout')
);
const NotFound = React.lazy(
    () => import(/* webpackChunkName: "NotFound" */ '../pages/NotFound')
);

import { PrivateRoute, PublicRoute, protectedRoutes } from './index';
import { Route as IRoute } from './routes';
import { Suspense } from 'react';
import { Fallback } from '../pages/Fallback';

export const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<PublicRoute />}>
                        <Route
                            path="/"
                            element={
                                <Suspense fallback={<Fallback />}>
                                    <Home />
                                </Suspense>
                            }
                        />
                        <Route path="login" element={<Login />} />
                    </Route>
                    <Route
                        element={
                            <PrivateRoute>
                                <Suspense fallback={<Fallback />}>
                                    <Layout />
                                </Suspense>
                            </PrivateRoute>
                        }
                    >
                        {protectedRoutes.map(({ Component, path }: IRoute) => (
                            <Route
                                key={path}
                                path={path}
                                element={<Component />}
                            />
                        ))}
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
