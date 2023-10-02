import { configureStore } from '@reduxjs/toolkit';
import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import appReducer from 'features/app/appSlice';
import userReducer from 'features/auth/userSlice';
import routingReducer from 'features/routing/routingSlice';
import { apiSlice } from './api/apiSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store: ToolkitStore = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: persistedUserReducer,
    app: appReducer,
    routing: routingReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false }).concat(
      apiSlice.middleware
    );
  },
  devTools: true,
});

export const persistor = persistStore(store);
