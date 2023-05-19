import bemCreator from '../ts/bemCreator';

const cn = bemCreator('categories');

const Categories = () => {
  return (
    <div className={cn()}>
      <ul className={cn('items')}>
        <li className={`active ${cn('item')}`}>Все</li>
        <li className={cn('item')}>Мясные</li>
        <li className={cn('item')}>Вегетарианская</li>
        <li className={cn('item')}>Гриль</li>
        <li className={cn('item')}>Острые</li>
        <li className={cn('item')}>Закрытые</li>
      </ul>
    </div>
  );
};

export default Categories;
