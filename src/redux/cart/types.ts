import { PizzaSize, PizzaType } from '../pizza/types';

//В pizzaId приходит Number(`${id}${activeType}${activeSize}`) из PizzaBlock

export interface CartDto {
  id: string;
  pizzaId: string;
  title: string;
  price: number;
  size: string | PizzaSize;
  type: PizzaType;
  imageUrl: string;
  count: number;
}

export interface ICart extends CartDto {}
export interface PCart extends Omit<CartDto, 'id'> {}

export interface CartState {
  items: ICart[];
  totalPrice: number;
  totalCount: number;
}
