import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPizza, PizzaState } from './types';
import { fetchPizzas } from './asyncThunk';

const initialState: PizzaState = {
  items: [],
  loading: true,
  error: false,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IPizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.items = [];
      state.loading = true;
      state.error = false;
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
      state.error = false;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.items = [];
      state.loading = false;
      state.error = true;
      console.error('AxiosError:', (action.error as Error).message);
    });
  },
});

export const { setItems } = pizzaSlice.actions;
export default pizzaSlice.reducer;
