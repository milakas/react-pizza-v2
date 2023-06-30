import { RootState } from '../store';

export const selectPizzaData = (state: RootState) => state.persist.pizza;
export const selectPizza = (state: RootState) => state.persist.pizza.items;
