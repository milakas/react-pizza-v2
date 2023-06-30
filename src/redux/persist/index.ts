import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

import filter from '../filter/slice';
import pizza from '../pizza/slice';
import cart from '../cart/slice';

const rootReducer = combineReducers({
  filter,
  pizza,
  cart,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
