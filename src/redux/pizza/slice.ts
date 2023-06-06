import { createSlice } from '@reduxjs/toolkit';
import { PizzaState } from './types';

const initialState: PizzaState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setPizzas(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
