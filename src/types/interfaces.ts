export interface IPizzaBlock {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  types: PizzaType[];
  sizes: PizzaSize[];
  price: number;
  category: number;
  rating: number;
}

export enum PizzaType {
  Thin,
  Traditional,
}

export const typeNames: Record<PizzaType, string> = {
  [PizzaType.Thin]: 'Тонкое',
  [PizzaType.Traditional]: 'Традиционное',
};

export enum PizzaSize {
  Small = 26,
  Medium = 30,
  Large = 35,
}

export const sizeNumber: Record<PizzaSize, number> = {
  [PizzaSize.Small]: 26,
  [PizzaSize.Medium]: 30,
  [PizzaSize.Large]: 35,
};

export type PizzaCategory =
  | 'Все'
  | 'Мясные'
  | 'Вегетарианские'
  | 'Гриль'
  | 'Острые'
  | 'Закрытые';
