import React from 'react';
import Grid from '@mui/material/Grid';
import axios from 'axios';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import { IPizzaBlock } from './types/interfaces';
import Skeleton from './components/PizzaBlock/Skeleton';

import './scss/app.scss';

function App() {
  const [items, setItems] = React.useState<IPizzaBlock[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.get(
          'https://646db4449c677e23218a4558.mockapi.io/items'
        );

        setItems(data);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error('Ошибка при запросе данных.', error);
    }
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
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
        </div>
      </div>
    </div>
  );
}

export default App;
