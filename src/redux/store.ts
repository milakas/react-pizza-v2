import { configureStore } from '@reduxjs/toolkit';
import filter from './filter/slice';
import pizza from './pizza/slice';

export const store = configureStore({
  reducer: {
    filter,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
