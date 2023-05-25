import CartBlock from '../components/CartBlock';
import Grid from '@mui/material/Grid';

import bemCreator from '../utils/bemCreator';
import { Link } from 'react-router-dom';

const cn = bemCreator('cart-block');

function Cart() {
  return (
    <>
      <div className={cn('wrap')}>
        <div className="content__top">
          <h2 className="content__title">Корзина</h2>
          <button className="button button--outline button--add go-back-btn">
            Очистить корзину
          </button>
        </div>
        <div className="content__items">
          <Grid container spacing={1}>
            <CartBlock />
            <CartBlock />
            <CartBlock />
          </Grid>
        </div>
        <div className={cn('bottom')}>
          <div className={cn('bottom-details')}>
            <span className={cn('total-price')}>Итого к оплате:</span>
            <span className={cn('total-price')}>900 ₽</span>
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
      </div>
    </>
  );
}

export default Cart;
