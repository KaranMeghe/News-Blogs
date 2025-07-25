/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './Slices/News/newsSlice';
import { newsApi } from './Slices/News/newsApi';

const store = configureStore({
  reducer: {
    news: newsReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store };
