import React from 'react';

import bemCreator from '../utils/bemCreator';
import { categories } from '../utils/constants';
import { setActiveIndex, getActiveClass } from '../utils/state';
import { PizzaCategory } from '../types/interfaces';

const cn = bemCreator('categories');

const Categories = () => {
  const [activeCategories, setActiveCategories] = React.useState<number>(0);

  return (
    <div className={cn()}>
      <ul className={cn('items')}>
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
