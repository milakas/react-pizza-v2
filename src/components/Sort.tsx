import React from 'react';

import bemCreator from '../utils/bemCreator';
import { SortItem } from '../redux/filter/types';
import { useAppDispatch } from '../redux/hooks';
import { setSortBy } from '../redux/filter/slice';

const cn = bemCreator('sort');

type SortProps = {
  sort: SortItem;
  sortList: SortItem[];
};

const Sort = ({ sort, sortList }: SortProps) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const sortRef = React.useRef<HTMLDivElement>(null);

  const toggleOpen = (): void => {
    setOpen((open) => !open);
  };

  const onClickSortItem = (obj: SortItem): void => {
    dispatch(setSortBy(obj));
    toggleOpen();
  };

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const composed = event.composedPath();
      if (!composed.includes(sortRef.current as HTMLDivElement)) {
        setOpen(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div ref={sortRef} className={cn()}>
      <div className={cn('label')} onClick={toggleOpen}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{sort.name}</span>
      </div>
      {open && (
        <div className={cn('popup')}>
          <ul>
            {sortList.map((sortItem, i) => (
              <li
                key={i}
                className={sort === sortItem ? 'active' : ''}
                onClick={() => onClickSortItem(sortItem)}>
                {sortItem.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default React.memo(Sort);
