import { ReactNode } from 'react';

export type PageType = {
  id: string;
  text: string;
  path: string;
};

export type AsidePageType = PageType & {
  module: string;
  icon: ReactNode;
  items: AsidePageType[];
};

export type PagesType = {
  [key: string]: PageType;
};

export type AsidePagesType = {
  [key: string]: AsidePageType;
};
