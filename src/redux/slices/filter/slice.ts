import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { FilterState, SortItem } from './types';

const initialState: FilterState = {
  currentPage: 1,
  // Установлено фиксированное количество totalPage из-за особенностей mockAPI
  totalPages: 3,
  itemsPerPage: 4,

  categoryId: 0,
  searchValue: '',
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
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortBy(state, action: PayloadAction<SortItem>) {
      state.sort = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<any>) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const {
  setCategoryId,
  setSortBy,
  setSearchValue,
  setCurrentPage,
  setFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
