import React from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';

import Categories from '../components/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import { IPizzaBlock } from '../types/pizza';
import PizzaBlock from '../components/PizzaBlock';
import { SortItem } from '../components/Sort/utils';

const Home = () => {
  const [items, setItems] = React.useState<IPizzaBlock[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [categoryId, setCategoryId] = React.useState<number>(0);
  const [sortType, setSortType] = React.useState<SortItem>({
    name: 'популярности',
    sortBy: 'rating',
  });

  React.useEffect(() => {
    try {
      setIsLoading(true);
      (async () => {
        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortType.sortBy.replace('-', '');
        const order = sortType.sortBy.includes('-') ? `asc` : `desc`;

        const { data } = await axios.get(
          `https://646db4449c677e23218a4558.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`
        );
        setItems(data);
        setIsLoading(false);
      })();
      window.scrollTo(0, 0);
    } catch (error) {
      console.error('Ошибка при запросе данных.', error);
    }
  }, [categoryId, sortType]);

  console.log(categoryId, sortType);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(i) => setCategoryId(i)}
        />
        <Sort value={sortType} onClickSort={(obj) => setSortType(obj)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Grid container spacing={3}>
          {isLoading
            ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
            : items.map((pizza: IPizzaBlock) => (
                <PizzaBlock key={pizza.id} {...pizza} />
              ))}
        </Grid>
      </div>
    </>
  );
};

export default Home;
