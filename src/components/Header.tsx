import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import bemCreator from '../ts/bemCreator';

const cn = bemCreator('header');

const Header = () => {
  return (
    <header className={cn()}>
      <div className={cn('wrap-logo')}>
        <h1 className={cn('title')}>React Pizza</h1>
      </div>
      <div className={cn('cart')}>
        <a href="/cart.html" className={`button ${cn('button')}`}>
          <span className={cn('price')}>520 ₽</span>
          <div className="button__delimiter"></div>
          <Badge badgeContent={4}>
            <ShoppingCartIcon fontSize="small" />
          </Badge>
        </a>
      </div>
    </header>
  );
};

export default Header;
