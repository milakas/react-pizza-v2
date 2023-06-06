import axios from 'axios';

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FetchPizzasPayload, IPizza, PizzaState } from './types';

const initialState: PizzaState = {
  items: [],
};

export const fetchPizzas = createAsyncThunk<IPizza[], FetchPizzasPayload>(
  'pizza/fetch',
  async ({ categoryId, sort, searchValue }) => {
    try {
      const category = categoryId > 0 ? `category=${categoryId}` : '';
      const sortBy = sort.sortBy.replace('-', '');
      const order = sort.sortBy.includes('-') ? 'asc' : 'desc';
      const search = searchValue ? `&search=${searchValue}` : '';
      const response = await axios.get(
        `https://646db4449c677e23218a4558.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
      );
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
