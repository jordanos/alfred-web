import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import appReducer from 'features/app/appSlice';
import authReducer from 'features/auth/authSlice';
import routingReducer from 'features/routing/routingSlice';
import { apiSlice } from './api/apiSlice';

export const store: ToolkitStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    app: appReducer,
    routing: routingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
