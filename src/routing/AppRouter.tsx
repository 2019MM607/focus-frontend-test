import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, NotFound, Login, Layout } from '../pages';
import { PrivateRoute, PublicRoute, protectedRoutes } from './index';
import { Route as IRoute } from './routes';
import { useAppDispatch, useAppSelector } from '../app/redux-hooks';
import { RootState } from '../redux/store';
import { useEffect } from 'react';
import { autoLogin } from '../redux/slice/auth.slice';

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
