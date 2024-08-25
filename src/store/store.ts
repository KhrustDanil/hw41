import { configureStore } from '@reduxjs/toolkit';
import { albumsApi } from './albumsApi';

export const store = configureStore({
  reducer: {
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
