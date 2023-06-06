import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundBlock = () => {
  return (
    <div className="not-found-block">
      <h1>
        <span>Упс!</span>
        <br />
        Ничего не найдено
      </h1>
      <Link to="/" className="button button--outline button--add">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default NotFoundBlock;
