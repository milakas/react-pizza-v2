import React from 'react';

import bemCreator from '../utils/bemCreator';
import { categories } from '../utils/constants';
import { setActiveIndex, getActiveClass } from '../utils/state';
import { PizzaCategory } from '../types/interfaces';

const cn = bemCreator('categories');

const Categories = () => {
  const [activeCategories, setActiveCategories] = React.useState<number>(0);
  const [scrollLeft, setScrollLeft] = React.useState(0);
  const carouselRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = scrollLeft;
    }
  }, [scrollLeft]);

  const handleScroll = () => {
    if (carouselRef.current) {
      setScrollLeft(carouselRef.current.scrollLeft);
    }
  };

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
