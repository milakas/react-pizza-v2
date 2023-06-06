import React, { ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { SearchIconWrapper, SearchMui, StyledInputBase } from './theme';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearchValue } from '../../redux/slices/filter';

const Search = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.filter.searchValue);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(target.value));
  };

  return (
    <SearchMui className="search-mui">
      <SearchIconWrapper className="search-icon-wrapper">
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        className="search-input"
        placeholder="Поиск..."
        inputProps={{ 'aria-label': 'search' }}
        value={searchValue}
        onChange={handleInputChange}
      />
    </SearchMui>
  );
};

export default Search;
