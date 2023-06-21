import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useLocation } from 'react-router-dom';

import bemCreator from '../utils/bemCreator';
import { Link } from 'react-router-dom';
import Search from './Search';
import { useAppSelector } from '../redux/hooks';
import { selectCart } from '../redux/cart/selector';

const cn = bemCreator('header');

const Header = () => {
  const { totalCount, totalPrice } = useAppSelector(selectCart);
  const { pathname } = useLocation();

  return (
    <header className={cn()}>
      <Link to="/" className={cn('wrap-logo')}>
        <div>
          <h1 className={cn('title')}>React Pizza</h1>
        </div>
      </Link>
      {pathname !== '/cart' && <Search />}
      <div className={cn('cart')}>
        <Link to="/cart" className={`button ${cn('button')}`}>
          <span className={cn('price')}>{totalPrice} ₽</span>
          <div className="button__delimiter"></div>
          <Badge badgeContent={totalCount}>
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </Link>
      </div>
    </header>
  );
};

export default Header;
