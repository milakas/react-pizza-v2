import React from 'react';

import bemCreator from '../../utils/bemCreator';
import { getActiveClass } from '../../utils/activeState';
import { categories } from './utils/сategories';
import { PizzaCategory } from '../../types/pizza';
import useScroll from './utils/useScroll';

const cn = bemCreator('categories');

interface CategoriesProps {
  value: number;
  onClickCategory(i: number): void;
}

const Categories = ({ value, onClickCategory }: CategoriesProps) => {
  const { carouselRef, handleScroll } = useScroll<HTMLUListElement>();

  return (
    <div className={cn()}>
      <ul className={cn('items')} ref={carouselRef} onScroll={handleScroll}>
        {categories.map((category: PizzaCategory, i: number) => (
          <li
            key={i}
            onClick={() => onClickCategory(i)}
            className={`${getActiveClass(value, i)} ${cn('item')}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
