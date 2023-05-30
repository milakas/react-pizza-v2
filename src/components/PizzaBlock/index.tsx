import React from 'react';
import Grid from '@mui/material/Grid';

import bemCreator from '../../utils/bemCreator';
import { setActiveIndex, getActiveClass } from '../../utils/activeState';
import { IPizzaBlock, PizzaType, PizzaSize } from '../../types/pizza';

const cn = bemCreator('pizza-block');

const PizzaBlock = ({
  imageUrl,
  title,
  description,
  types,
  sizes,
  price,
}: IPizzaBlock) => {
  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const getTypeName = (type: PizzaType): string => {
    return type === 0 ? 'Тонкое' : 'Традиционное';
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className={cn()}>
        <div className={cn('content')}>
          <div className={cn('image-wrap')}>
            <img className={cn('image')} src={imageUrl} alt="Pizza" />
          </div>
          <div className={cn('text-wrap')}>
            <h3 className={cn('title')}>{title}</h3>
            <p className={cn('description')}>{description}</p>
          </div>
        </div>
        <div className={cn('bottom')}>
          <div className={cn('selector')}>
            <ul className={cn('sizes')}>
              {sizes.map((size: PizzaSize, i: number) => (
                <li
                  key={i}
                  onClick={(): void => setActiveIndex(setActiveSize, i)}
                  className={`${getActiveClass(activeSize, i)} ${cn('size')}`}>
                  {size} см.
                </li>
              ))}
            </ul>
            <ul className={cn('types')}>
              {types.map((type: PizzaType, i: number) => (
                <li
                  key={i}
                  onClick={(): void => setActiveIndex(setActiveType, i)}
                  className={`${getActiveClass(activeType, i)} ${cn('type')}`}>
                  {getTypeName(type)}
                </li>
              ))}
            </ul>
          </div>
          <div className={cn('order')}>
            <div className={cn('price')}>от {price} ₽</div>
            <button className="button button--outline button--add">
              <span className={cn('add')}>Добавить</span>
              <i>0</i>
            </button>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default PizzaBlock;
