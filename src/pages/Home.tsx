import React from 'react';
import qs from 'qs';
import axios from 'axios';
import { useNavigate } from 'react-router';

import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

import Categories from '../components/Categories';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import { selectPizzaData } from '../redux/slices/pizza/selectors';
import { selectFilter } from '../redux/slices/filter/selectors';
import { setPizzas } from '../redux/slices/pizza/slice';
import { setCurrentPage, setFilters } from '../redux/slices/filter/slice';
import { IPizza } from '../redux/slices/pizza/types';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef<boolean>(false);
  const isMounted = React.useRef<boolean>(false);

  const {
    categoryId,
    sort,
    searchValue,
    currentPage,
    itemsPerPage,
    sortList,
    totalPages,
  } = useAppSelector(selectFilter);
  const { items } = useAppSelector(selectPizzaData);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const fetchPizzas = async () => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortBy.replace('-', '');
    const order = sort.sortBy.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `&search=${searchValue}` : '';
    const { data } = await axios.get(
      `https://646db4449c677e23218a4558.mockapi.io/items?page=${currentPage}&limit=${itemsPerPage}&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    dispatch(setPizzas(data));
    setIsLoading(false);
  };

  // Парсим параметры при первом рендере
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = sortList.find((obj) => obj.sortBy === params.sortBy);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortBy: sort.sortBy,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortBy, currentPage]);

  // Если был первый рендер, то запрашиваем пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      fetchPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  const pizzas = items?.map((pizza: IPizza) => (
    <PizzaBlock key={pizza.id} {...pizza} />
  ));

  const skeleton = [...new Array(itemsPerPage)].map((_, i) => (
    <Skeleton key={i} />
  ));

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    dispatch(setCurrentPage(page));
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <Grid container spacing={3}>
          {isLoading ? skeleton : pizzas}
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
