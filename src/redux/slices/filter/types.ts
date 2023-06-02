import { PizzaCategory } from '../pizza/types';

export interface SortItem {
  name: string;
  sortBy: string;
}

export interface FilterState {
  categoryId: number;
  sort: SortItem;
  sortList: SortItem[];
  categories: PizzaCategory[];
}
