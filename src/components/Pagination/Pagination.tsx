import React, { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';
import { PAGES, PAGE_LIMIT } from 'lib/consts';
import { Link, To } from 'react-router-dom';

interface IPagination {
  pages: number;
  currentPage: number;
}

function Pagination({ pages, currentPage }: IPagination) {
  const pagesArr = Array.from({ length: pages });

  return (
    <div className={styles.pagination}>
      {currentPage - 1 > 0 && (
        <div className="prev">
          <Link to={`${PAGES.TABLE}?_page=${currentPage - 1}`}>Назад</Link>
        </div>
      )}
      <div className={styles.bar}>
        {pagesArr.map((page, i) => (
          <Link key={i} to={`${PAGES.TABLE}?_page=${i + 1}`} className={styles.item}>
            {i + 1}
          </Link>
        ))}
      </div>
      <div className="next">
        {currentPage + 1 <= pagesArr.length && (
          <Link to={`${PAGES.TABLE}?_page=${currentPage + 1}`}>Далее</Link>
        )}
      </div>
    </div>
  );
}

export default Pagination;
