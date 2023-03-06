import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Layout from '../pages/Layout';

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
                        <Route path="/" element={<Home />} />
                        <Route path="login" element={<Login />} />
                    </Route>
                    <Route
                        element={
                            <PrivateRoute>
                                <Layout />
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
