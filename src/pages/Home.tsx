import React from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

import Categories from '../components/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import { SortItem } from '../components/Sort/utils';

import { IPizzaBlock } from '../types/pizza';
import SearchContext from '../contexts/SearchContext';

const Home = () => {
  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState<IPizzaBlock[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [categoryId, setCategoryId] = React.useState<number>(0);
  const [sortType, setSortType] = React.useState<SortItem>({
    name: 'популярности',
    sortBy: 'rating',
  });
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sortType.sortBy.replace('-', '');
        const order = sortType.sortBy.includes('-') ? 'asc' : 'desc';
        const search = searchValue ? `&search=${searchValue}` : '';
        const { data } = await axios.get(
          `https://646db4449c677e23218a4558.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
        );

        setItems(data);
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Ошибка при запросе данных.', error);
      }
    })();
  }, [categoryId, sortType, searchValue]);

  const pizzas = items.map((pizza: IPizzaBlock) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));

  const skeleton = [...new Array(itemsPerPage)].map((_, i) => (
    <Skeleton key={i} />
  ));

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const totalPages = Math.ceil(pizzas.length / itemsPerPage);

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
          {isLoading ? skeleton : pizzas.slice(startIndex, endIndex)}
        </Grid>
      </div>
      <div className="content__pagination">
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          size="large"
        />
      </div>
    </>
  );
};

export default Home;
