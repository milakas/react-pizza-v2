import { PizzaCategory } from '../pizza/types';

export interface SortItem {
  name: string;
  sortBy: string;
}

export interface FilterState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  categoryId: number;
  sort: SortItem;
  searchValue: string;
  sortList: SortItem[];
  categories: PizzaCategory[];
}
