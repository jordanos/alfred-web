import { lazy } from 'react';

export default {
  login: lazy(() => import('./Login')),
  register: lazy(() => import('./Register')),
};
