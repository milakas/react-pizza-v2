import { PizzaCategory } from '../pizza/types';

export interface SortItem {
  name: string;
  sortBy: string;
}

export interface FilterState {
  currentPage: number;
  totalPages: number;
  itemsPerPage: ITEMS_PER_PAGE;
  categoryId: number;
  sort: SortItem;
  searchValue: string;
  sortList: SortItem[];
  categories: PizzaCategory[];
}

export enum ITEMS_PER_PAGE {
  LIMIT = 4,
}
