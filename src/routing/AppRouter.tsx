import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, NotFound, Login } from '../pages';
import { PrivateRoute, PublicRoute, protectedRoutes } from './index';
import { Route as IRoute } from './routes';

export const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route element={<PrivateRoute />}>
            {protectedRoutes.map(({ Component, path }: IRoute) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
