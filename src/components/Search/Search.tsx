import React, { ChangeEvent } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { SearchIconWrapper, SearchMui, StyledInputBase } from './theme';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setSearchValue } from '../../redux/slices/filter';
import bemCreator from '../../utils/bemCreator';

const cn = bemCreator('search');

const Search = () => {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector((state) => state.filter.searchValue);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(target.value));
  };

  const cleanSearch = () => {
    dispatch(setSearchValue(''));
  };

  const focusInputRef = () => {
    inputRef.current && inputRef.current.focus();
  };

  const handleInputClean = () => {
    cleanSearch();
    focusInputRef();
  };

  return (
    <SearchMui className={cn()}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        className={cn('input-wrap')}
        inputRef={inputRef}
        placeholder="Поиск..."
        inputProps={{ 'aria-label': 'search' }}
        value={searchValue}
        onChange={handleInputChange}
      />
      {searchValue && (
        <div className={cn('close-wrapper')}>
          <CloseIcon
            className={cn('close')}
            onClick={handleInputClean}
            color="action"
            fontSize="small"
          />
        </div>
      )}
    </SearchMui>
  );
};

export default Search;
