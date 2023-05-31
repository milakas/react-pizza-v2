import React, { ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';

import { SearchIconWrapper, SearchMui, StyledInputBase } from './utils';

interface SearchProps {
  searchValue: string;
  setSearchValue(value: string): void;
}

const Search = ({ searchValue, setSearchValue }: SearchProps) => {
  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(target.value);
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
