import { PizzaSize, PizzaType } from '../pizza/types';

//В pizzaId приходит Number(`${id}${activeType}${activeSize}`) из PizzaBlock

export interface ICart {
  id: number;
  pizzaId: number;
  title: string;
  price: number;
  size: string | PizzaSize;
  type: PizzaType;
  imageUrl: string;
  count: number;
}

export interface CartState {
  items: ICart[];
  totalPrice: number;
  totalCount: number;
}
