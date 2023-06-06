import React, { ChangeEvent } from 'react';
import debounce from 'lodash.debounce';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import { SearchIconWrapper, SearchMui, StyledInputBase } from './theme';
import { useAppDispatch } from '../../redux/hooks';
import { setSearchValue } from '../../redux/slices/filter/slice';

import bemCreator from '../../utils/bemCreator';

const cn = bemCreator('search');

const Search = () => {
  const [value, setValue] = React.useState<string>('');

  const dispatch = useAppDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const updateSearchValue = React.useCallback(
    debounce((value: string) => {
      dispatch(setSearchValue(value));
    }, 400),
    []
  );

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setValue(target.value);
    updateSearchValue(target.value);
  };

  const cleanSearch = () => {
    setValue('');
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
        value={value}
        onChange={handleInputChange}
      />
      {value && (
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
