import React from 'react';

import bemCreator from '../../utils/bemCreator';
import { setActiveIndex, getActiveClass } from '../../utils/activeState';
import { categories } from './utils/сategories';
import { PizzaCategory } from '../../types/pizza';
import useScroll from './utils/useScroll';

const cn = bemCreator('categories');

const Categories = () => {
  const [activeCategories, setActiveCategories] = React.useState<number>(0);
  const { carouselRef, handleScroll } = useScroll<HTMLUListElement>();

  return (
    <div className={cn()}>
      <ul className={cn('items')} ref={carouselRef} onScroll={handleScroll}>
        {categories.map((category: PizzaCategory, i: number) => (
          <li
            key={i}
            onClick={() => setActiveIndex(setActiveCategories, i)}
            className={`${getActiveClass(activeCategories, i)} ${cn('item')}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
