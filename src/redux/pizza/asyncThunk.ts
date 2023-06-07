import { createAsyncThunk } from '@reduxjs/toolkit';
import { FetchPizzasParams, IPizza } from './types';
import axios from 'axios';
import identity from 'lodash.identity';
import pickBy from 'lodash.pickby';

export const fetchPizzas = createAsyncThunk<IPizza[], FetchPizzasParams>(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://646db4449c677e23218a4558.mockapi.io/items`,
      {
        params: pickBy(
          {
            page: currentPage,
            limit: 4,
            category,
            sortBy,
            order,
            search,
          },
          identity
        ),
      }
    );

    return data;
  }
);
