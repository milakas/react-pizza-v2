import { ICart } from '../redux/cart/types';

export const calcTotalPrice = (items: ICart[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
