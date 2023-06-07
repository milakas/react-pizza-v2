export type PizzaType = 0 | 1;
export type PizzaSize = 26 | 30 | 35;
export type PizzaCategory =
  | 'Все'
  | 'Мясные'
  | 'Вегетарианские'
  | 'Гриль'
  | 'Острые';

export interface IPizza {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  types: PizzaType[];
  sizes: PizzaSize[];
  price: number;
  category: PizzaCategory | number;
  rating: number;
}
export interface PizzaState {
  items: IPizza[];
  loading: boolean;
  error: boolean;
}

export interface FetchPizzasParams {
  category: string;
  sortBy: string;
  search: string;
  currentPage: string;
  order: string;
}
