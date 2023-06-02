import React from 'react';
import axios from 'axios';

import { useAppSelector } from '../redux/hooks';

import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';

import Categories from '../components/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import SearchContext from '../contexts/SearchContext';
import { IPizza } from '../redux/slices/pizza/types';

const Home = () => {
  const { categoryId, sort } = useAppSelector((state) => state.filter);

  const { searchValue } = React.useContext(SearchContext);

  const [items, setItems] = React.useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const sortBy = sort.sortBy.replace('-', '');
        const order = sort.sortBy.includes('-') ? 'asc' : 'desc';
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
  }, [categoryId, sort, searchValue]);

  const pizzas = items.map((pizza: IPizza) => (
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
        <Categories />
        <Sort />
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
