import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FilterState, SortItem } from './types';

const initialState: FilterState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortBy: 'rating',
  },
  sortList: [
    { name: 'популярности', sortBy: 'rating' },
    { name: 'цене ↑', sortBy: '-price' },
    { name: 'цене ↓', sortBy: 'price' },
    { name: 'алфавиту', sortBy: 'title' },
  ],
  categories: ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'],
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSortBy: (state, action: PayloadAction<SortItem>) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSortBy } = filterSlice.actions;
export default filterSlice.reducer;
