import { PizzaCategory } from '../pizza/types';

export interface SortItem {
  name: string;
  sortBy: string;
}

export interface FilterState {
  categoryId: number;
  sort: SortItem;
  searchValue: string;
  sortList: SortItem[];
  categories: PizzaCategory[];
}
