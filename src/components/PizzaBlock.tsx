import Grid from '@mui/material/Grid';

import bemCreator from '../utils/bemCreator';

const cn = bemCreator('pizza-block');

const PizzaBlock = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div className={cn()}>
        <main className={cn('content')}>
          <div className={cn('image-wrap')}>
            <img
              className={cn('image')}
              src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
              alt="Pizza"
            />
          </div>
          <div>
            <h3 className={cn('title')}>Чизбургер-пицца</h3>
            <p className={cn('description')}>
              Ветчина, маринованные огурчики, томаты, красный лук, чеснок, соус
              бургер, моцарелла, фирменный томатный соус
            </p>

            <div className={cn('selector')}>
              <ul className={cn('sizes')}>
                <li className={`active ${cn('size')}`}>Маленькая</li>
                <li className={cn('size')}>Средняя</li>
                <li className={cn('size')}>Большая</li>
              </ul>
              <ul className={cn('types')}>
                <li className={`active ${cn('type')}`}>Тонкое</li>
                <li className={cn('type')}>Традиционное</li>
              </ul>
            </div>
          </div>
        </main>
        <footer className={cn('bottom')}>
          <div className={cn('price')}>от 395 ₽</div>
          <div className="button button--outline button--add">
            <span className={cn('add')}>В корзину</span>
          </div>
        </footer>
      </div>
    </Grid>
  );
};

export default PizzaBlock;
