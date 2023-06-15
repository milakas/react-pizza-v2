import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchPizzasParams, IPizza } from './types';
import axios from 'axios';
import identity from 'lodash.identity';
import pickBy from 'lodash.pickby';
import { BASE_URL } from '../../utils/const';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (params: FetchPizzasParams): Promise<IPizza[]> => {
    const { sortBy, order, category, search, currentPage, limit } = params;
    const { data } = await axios.get(BASE_URL, {
      params: pickBy(
        {
          page: currentPage,
          limit,
          category,
          sortBy,
          order,
          search,
        },
        identity
      ),
    });

    return data;
  }
);
