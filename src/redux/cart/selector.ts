import { RootState } from '../store';

export const selectCart = (state: RootState) => state.persist.cart;
export const selectCartItems = (state: RootState) => state.persist.cart.items;
