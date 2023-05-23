import React from 'react';
import Grid from '@mui/material/Grid';

import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

import pizzas from './assets/pizzas.json';

import './scss/app.scss';

console.log(pizzas);

function App() {
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
              {pizzas.map((pizza) => (
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
