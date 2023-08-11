import LazyLoad from 'components/widgets/LazyLoad';
import { FC, lazy, LazyExoticComponent } from 'react';
import { RouteObject } from 'react-router-dom';
import { publicPages } from './menu';

const pagesLazyImport: { [key: string]: LazyExoticComponent<FC> } = {
  home: lazy(() => import('pages/Home')),
};

export const publicRoutes: RouteObject[] = [
  ...Object.keys(publicPages).map((key) => ({
    path: publicPages[key].path,
    element: LazyLoad({ Component: pagesLazyImport[key] }),
  })),
];

export const protectedRoutes: RouteObject[] = [];
