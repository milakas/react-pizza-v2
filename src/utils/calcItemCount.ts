import { ICart } from '../redux/cart/types';

export const calcItemCount = (cartItems: ICart[], id: number) => {
  const filteredCartItems = cartItems.filter((obj) => +obj.pizzaId === id);
  return filteredCartItems.reduce((sum, obj) => obj.count + sum, 0);
};
