import { RootState } from '../store';

export const selectPizzaData = (state: RootState) => state.pizza;
export const selectPizza = (state: RootState) => state.pizza.items;
