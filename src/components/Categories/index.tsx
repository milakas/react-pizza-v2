import React from 'react';
import clsx from 'clsx';

import bemCreator from '../../utils/bemCreator';
import useScroll from './useScroll';
import { useAppDispatch } from '../../redux/hooks';
import { setCategoryId } from '../../redux/filter/slice';
import { PizzaCategory } from '../../redux/pizza/types';

const cn = bemCreator('categories');

type CategoriesProps = {
  categoryId: number;
  categories: PizzaCategory[];
};

const Categories = ({ categoryId, categories }: CategoriesProps) => {
  const dispatch = useAppDispatch();
  const { carouselRef, handleScroll } = useScroll<HTMLUListElement>();

  const onChangeCategory = React.useCallback((index: number) => {
    dispatch(setCategoryId(index));
  }, []);

  return (
    <div className={cn()}>
      <ul className={cn('items')} ref={carouselRef} onScroll={handleScroll}>
        {categories.map((category, i: number) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={clsx(cn('item'), { active: categoryId === i })}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Categories);
