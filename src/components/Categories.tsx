import React from 'react';

import bemCreator from '../utils/bemCreator';
import { categories } from '../utils/constants';

const cn = bemCreator('categories');

const Categories = () => {
  const [activeCategories, setActiveCategories] = React.useState<number>(0);

  const onClickCategory = (index: number): void => {
    setActiveCategories(index);
  };

  const getActiveCategoryClassName = (index: number): string => {
    return activeCategories === index ? 'active' : '';
  };

  return (
    <div className={cn()}>
      <ul className={cn('items')}>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={`${getActiveCategoryClassName(index)} ${cn('item')}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
