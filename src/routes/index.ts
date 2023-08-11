import { asideHeaders } from './headerRoutes';
import { protectedRoutes, publicRoutes } from './contentRoutes';
import {
  authPages,
  asidePages,
  innerPages,
  commonPages,
  publicPages,
  noAccessReq,
  noAsidePages,
} from './menu';

export default {
  asideHeaders,
  protectedRoutes,
  publicRoutes,
  authPages,
  asidePages,
  innerPages,
  commonPages,
  publicPages,
  noAccessReq,
  noAsidePages,
};
