import LazyLoad from 'components/widgets/LazyLoad';
import authRoutes from 'features/auth/routes';
import miscRoutes from 'features/misc/routes';
import { FC, LazyExoticComponent } from 'react';
import { RouteObject } from 'react-router-dom';
import { publicPages } from './menu';

// Get routes from every features/route
// The route key should be as same as the one in menu page.id
const pagesLazyImport: { [key: string]: LazyExoticComponent<FC> } = {
  ...authRoutes,
  ...miscRoutes,
};

export const publicRoutes: RouteObject[] = [
  ...Object.keys(publicPages).map((key) => ({
    path: publicPages[key].path,
    element: LazyLoad({ Component: pagesLazyImport[key] }),
  })),
];

export const protectedRoutes: RouteObject[] = [];
