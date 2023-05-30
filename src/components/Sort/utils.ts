export interface SortItem {
  name: string;
  sortBy: string;
}

export const sortList: SortItem[] = [
  { name: 'популярности', sortBy: 'rating' },
  { name: 'цене ↑', sortBy: '-price' },
  { name: 'цене ↓', sortBy: 'price' },
  { name: 'алфавиту', sortBy: 'title' },
];
