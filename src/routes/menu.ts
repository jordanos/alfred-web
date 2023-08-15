import { AsidePagesType, PagesType } from './types';

export const authPages: PagesType = {};

export const asidePages: AsidePagesType = {};

export const page404: PagesType = {};

export const innerPages: PagesType = {};

export const commonPages: PagesType = {};

export const publicPages: PagesType = {
  landing: {
    id: 'landing',
    text: 'landing',
    path: '/',
  },
};

// Apply route guarding for inner pages too
export const noAccessReq = [
  ...Object.values(commonPages).map((item) => item.path),
  ...Object.values(innerPages).map((item) => item.path),
];

export const noAsidePages = [
  ...Object.values(authPages).map((item) => item.path),
  ...Object.values(publicPages).map((item) => item.path),
];
