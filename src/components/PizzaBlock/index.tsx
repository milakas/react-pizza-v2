import React from 'react';
import clsx from 'clsx';
import Grid from '@mui/material/Grid';

import bemCreator from '../../utils/bemCreator';
import { IPizza, PizzaType, PizzaSize } from '../../redux/pizza/types';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addItem } from '../../redux/cart/slice';
import { ICart } from '../../redux/cart/types';
import { selectCartItems } from '../../redux/cart/selector';
import { calcItemCount } from '../../utils/calcItemCount';
import { getTypeName } from '../../utils/getTypeName';
import { Link } from 'react-router-dom';

const cn = bemCreator('pizza-block');

const PizzaBlock = ({
  id,
  imageUrl,
  title,
  description,
  types,
  sizes,
  price,
}: IPizza) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);

  const [activeType, setActiveType] = React.useState<number>(0);
  const [activeSize, setActiveSize] = React.useState<number>(0);

  const onClickAdd = () => {
    const addedItem: ICart = {
      id: `${id}${activeType}${activeSize}`,
      pizzaId: id,
      title,
      imageUrl,
      price,
      type: types[activeType],
      size: sizes[activeSize],
      count: 0,
    };

    dispatch(addItem(addedItem));
  };

  const hangleChangeSize = (i: number) => {
    setActiveSize(i);
  };

  const hangleChangeType = (i: number) => {
    setActiveType(i);
  };

  const addedCount = cartItems ? calcItemCount(cartItems, Number(id)) : 0;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className={cn()}>
        <Link to={`/pizza/${id}`}>
          <div className={cn('content')}>
            <div className={cn('image-wrap')}>
              <img className={cn('image')} src={imageUrl} alt="Pizza" />
            </div>
            <div className={cn('text-wrap')}>
              <h3 className={cn('title')}>{title}</h3>
              <p className={cn('description')}>{description}</p>
            </div>
          </div>
        </Link>
        <div className={cn('bottom')}>
          <div className={cn('selector')}>
            <ul className={cn('sizes')}>
              {sizes.map((size: PizzaSize, i: number) => (
                <li
                  key={i}
                  onClick={() => hangleChangeSize(i)}
                  className={clsx(cn('size'), { active: activeSize === i })}>
                  {size} см.
                </li>
              ))}
            </ul>
            <ul className={cn('types')}>
              {types.map((type: PizzaType, i: number) => (
                <li
                  key={i}
                  onClick={() => hangleChangeType(i)}
                  className={clsx(cn('type'), { active: activeType === i })}>
                  {getTypeName(type)}
                </li>
              ))}
            </ul>
          </div>
          <div className={cn('order')}>
            <div className={cn('price')}>от {price} ₽</div>
            <button
              className="button button--outline button--add"
              onClick={onClickAdd}>
              <span className={cn('add')}>Добавить</span>
              {addedCount > 0 && <i>{addedCount}</i>}
            </button>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default PizzaBlock;
