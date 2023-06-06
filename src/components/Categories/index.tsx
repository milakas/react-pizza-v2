import React from 'react';

import bemCreator from '../../utils/bemCreator';
import { getActiveClass } from '../../utils/activeState';
import useScroll from './useScroll';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCategoryId } from '../../redux/slices/filter';

const cn = bemCreator('categories');

const Categories = () => {
  const dispatch = useAppDispatch();
  const { categoryId, categories } = useAppSelector((state) => state.filter);
  const { carouselRef, handleScroll } = useScroll<HTMLUListElement>();

  const onChangeCategory = (index: number) => {
    dispatch(setCategoryId(index));
  };

  return (
    <div className={cn()}>
      <ul className={cn('items')} ref={carouselRef} onScroll={handleScroll}>
        {categories.map((category, i: number) => (
          <li
            key={i}
            onClick={() => onChangeCategory(i)}
            className={`${getActiveClass(categoryId, i)} ${cn('item')}`}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
