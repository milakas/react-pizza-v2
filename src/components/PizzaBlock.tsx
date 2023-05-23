import React from 'react';
import Grid from '@mui/material/Grid';

import bemCreator from '../utils/bemCreator';
import { typeNames } from '../utils/constants';

const cn = bemCreator('pizza-block');

interface IPizzaBlock {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

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

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className={cn()}>
        <div className={cn('content')}>
          <div className={cn('image-wrap')}>
            <img className={cn('image')} src={imageUrl} alt="Pizza" />
          </div>
          <h3 className={cn('title')}>{title}</h3>
          <p className={cn('description')}>{description}</p>
        </div>
        <div className={cn('bottom')}>
          <div className={cn('selector')}>
            <ul className={cn('sizes')}>
              {sizes.map((size: number, i: number) => (
                <li
                  key={i}
                  onClick={() => setActiveSize(i)}
                  className={`${activeSize === i ? 'active' : ''} ${cn(
                    'size'
                  )}`}>
                  {size} см.
                </li>
              ))}
            </ul>
            <ul className={cn('types')}>
              {types.map((type: number, i: number) => (
                <li
                  key={i}
                  onClick={() => setActiveType(i)}
                  className={`${activeType === i ? 'active' : ''} ${cn(
                    'type'
                  )}`}>
                  {typeNames[type]}
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
