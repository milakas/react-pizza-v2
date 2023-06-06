import React from 'react';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { IPizza } from '../redux/slices/pizza/types';
import { fetchPizzas } from '../redux/slices/pizza';

import Categories from '../components/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';

const Home = () => {
  const dispatch = useAppDispatch();
  const { categoryId, sort, searchValue } = useAppSelector(
    (state) => state.filter
  );
  const { items } = useAppSelector((state) => state.pizza);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const ITEMS_PER_PAGE = 4;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        await dispatch(fetchPizzas({ categoryId, sort, searchValue }));
        setIsLoading(false);
        window.scrollTo(0, 0);
      } catch (error) {
        console.error('Ошибка при запросе данных.', error);
      }
    })();
  }, [categoryId, sort, searchValue, dispatch]);

  const pizzas = items?.map((pizza: IPizza) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));

  const skeleton = [...new Array(ITEMS_PER_PAGE)].map((_, i) => (
    <Skeleton key={i} />
  ));

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const totalPages = Math.ceil(pizzas.length / ITEMS_PER_PAGE);

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
