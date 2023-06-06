import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter';
import pizza from './slices/pizza';

export const store = configureStore({
  reducer: {
    filter,
    pizza,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
