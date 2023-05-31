import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import bemCreator from '../utils/bemCreator';
import { Link } from 'react-router-dom';
import Search from './Search/Search';

const cn = bemCreator('header');

const Header = () => {
  return (
    <header className={cn()}>
      <Link to="/" className={cn('wrap-logo')}>
        <div>
          <h1 className={cn('title')}>React Pizza</h1>
        </div>
      </Link>
      <Search />
      <div className={cn('cart')}>
        <Link to="/cart" className={`button ${cn('button')}`}>
          <span className={cn('price')}>520 ₽</span>
          <div className="button__delimiter"></div>
          <Badge badgeContent={4}>
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </Link>
      </div>
    </header>
  );
};

export default Header;
