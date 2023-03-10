import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Route as IRoute } from './routes';
import { PrivateRoute, PublicRoute, protectedRoutes } from './index';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Layout from '../pages/Layout';
import { Fallback } from '../pages/Fallback';

export const AppRouter = () => {
    return (
        <div>
            <Suspense fallback={<Fallback />}>
                <BrowserRouter>
                    <Routes>
                        <Route element={<PublicRoute />}>
                            <Route path="/" element={<Home />} />
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
                            {protectedRoutes.map(
                                ({ Component, path }: IRoute) => (
                                    <Route
                                        key={path}
                                        path={path}
                                        element={<Component />}
                                    />
                                )
                            )}
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </div>
    );
};
