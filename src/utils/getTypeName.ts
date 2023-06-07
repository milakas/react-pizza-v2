import { PizzaType } from '../redux/pizza/types';

export const getTypeName = (type: PizzaType): string => {
  return type === 0 ? 'Тонкое' : 'Традиционное';
};
