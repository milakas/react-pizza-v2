import { ITEMS_PER_PAGE, SortItem } from '../filter/types';

export type PizzaType = 0 | 1;
export type PizzaSize = 26 | 30 | 35;
export type PizzaCategory =
  | 'Все'
  | 'Мясные'
  | 'Вегетарианские'
  | 'Гриль'
  | 'Острые';

export interface PizzaDto {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  types: PizzaType[];
  sizes: PizzaSize[];
  price: number;
  category: PizzaCategory | number;
  rating: number;
}

export interface IPizza extends PizzaDto {}

export interface PizzaState {
  items: IPizza[];
  loading: boolean;
  error: boolean;
}

export interface FetchPizzasParams {
  category: string;
  sortBy: SortItem['sortBy'];
  search: string;
  currentPage: string;
  order: string;
  limit: ITEMS_PER_PAGE;
}
