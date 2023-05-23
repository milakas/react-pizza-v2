import React from 'react';

import bemCreator from '../utils/bemCreator';
import { categories } from '../utils/constants';
import { setActiveIndex, getActiveClass } from '../utils/state';

const cn = bemCreator('categories');

const Categories = () => {
  const [activeCategories, setActiveCategories] = React.useState<number>(0);

  return (
    <div className={cn()}>
      <ul className={cn('items')}>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(setActiveCategories, index)}
            className={`${getActiveClass(activeCategories, index)} ${cn(
              'item'
            )}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
