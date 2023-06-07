import { ICart } from '../redux/cart/types';

export const calcTotalCount = (items: ICart[]) => {
  return items.reduce((sum, obj) => obj.count + sum, 0);
};
