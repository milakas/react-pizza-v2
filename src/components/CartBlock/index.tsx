import React from 'react';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

import bemCreator from '../../utils/bemCreator';
import { useAppDispatch } from '../../redux/hooks';
import { ICart } from '../../redux/cart/types';
import {
  decrementCount,
  incrementCount,
  removeItem,
} from '../../redux/cart/slice';
import { getTypeName } from '../../utils/getTypeName';

const cn = bemCreator('cart-block');

const CartBlock = (item: ICart) => {
  const dispatch = useAppDispatch();

  const { count, price, type, size, title, imageUrl } = item;

  const handleDecrement = () => {
    dispatch(decrementCount(item));
  };

  const handleIncrement = () => {
    dispatch(incrementCount(item));
  };

  const handleRemove = () => {
    if (window.confirm('Товар будет удален из корзины')) {
      dispatch(removeItem(item));
    }
  };

  return (
    <Grid item xs={12}>
      <div className={cn()}>
        <div className={cn('content')}>
          <div className={cn('image-wrap')}>
            <img className={cn('image')} src={imageUrl} alt="Pizza" />
          </div>
          <div className={cn('wrap')}>
            <div className={cn('info')}>
              <h3 className={cn('title')}>{title}</h3>
              <p className={cn('description')}>
                {getTypeName(type)} тесто, {size} см.
              </p>
            </div>
            <div className={cn('button')}>
              <div className={cn('item-count')}>
                <ButtonGroup>
                  <Button aria-label="reduce">
                    {count > 1 ? (
                      <RemoveIcon fontSize="small" onClick={handleDecrement} />
                    ) : (
                      <DeleteIcon fontSize="small" onClick={handleRemove} />
                    )}
                  </Button>
                  <div className={cn('count')}>{count}</div>
                  <Button aria-label="increase" onClick={handleIncrement}>
                    <AddIcon fontSize="small" />
                  </Button>
                </ButtonGroup>
              </div>
              <span className={cn('price')}>{price * count} ₽</span>
            </div>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default CartBlock;
