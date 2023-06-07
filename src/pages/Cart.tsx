import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import CartBlock from '../components/CartBlock';
import bemCreator from '../utils/bemCreator';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectCart, selectCartItems } from '../redux/cart/selector';
import { ICart } from '../redux/cart/types';
import { clearItems } from '../redux/cart/slice';
import NotFoundBlock from '../components/NotFoundBlock';

const cn = bemCreator('cart-block');

const Cart = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems);
  const { totalPrice } = useAppSelector(selectCart);

  const handleClearCart = () => {
    if (
      window.confirm(
        'Все товары в корзине будут удалены. Нажмите "ОК", если согласны.'
      )
    ) {
      dispatch(clearItems());
    }
  };

  return (
    <div className={cn('wrap')}>
      {totalPrice === 0 ? (
        <NotFoundBlock title="Корзина пустая" />
      ) : (
        <>
          <div className="content__top">
            <h2 className="content__title">Корзина</h2>
            <button
              onClick={handleClearCart}
              className="button button--outline button--add go-back-btn">
              Очистить корзину
            </button>
          </div>
          <div className="content__items">
            <Grid container spacing={1}>
              {cartItems.map((item: ICart) => (
                <CartBlock key={item.id} {...item} />
              ))}
            </Grid>
          </div>
          <div className={cn('bottom')}>
            <div className={cn('bottom-details')}>
              <span className={cn('total-price')}>Итого к оплате:</span>
              <span className={cn('total-price')}>{totalPrice} ₽</span>
            </div>
            <button className={`button ${cn('botton-buy')}`}>
              Оплатить сейчас
            </button>
            <Link
              to="/"
              className={`button button--outline button--add go-back-btn ${cn(
                'botton-back'
              )}`}>
              Вернуться назад
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
