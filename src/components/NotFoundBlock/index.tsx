import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFoundBlock.module.scss';

function NotFoundBlock() {
  return (
    <div className={styles.error}>
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
}

export default NotFoundBlock;
