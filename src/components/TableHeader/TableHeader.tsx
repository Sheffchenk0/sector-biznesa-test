import React, { useState } from 'react';
import downArrowSvg from 'assets/img/svg/down-arrow.svg';
import styles from './TableHeader.module.scss';
import { SORT_BY } from 'lib/consts';
import classNames from 'classnames';

interface ITableHeader {
  onSort: (id: number) => void;
}

function TableHeader({ onSort }: ITableHeader) {
  const [activeSort, setActiveSort] = useState<number | null>(null);
  const onClick = (id: number) => {
    if (id !== activeSort) {
      setActiveSort(id);
      onSort(id);
      return;
    }
    let result = id;
    switch (id) {
      case SORT_BY.ID:
        result = SORT_BY.ID_REVERSE;
        break;
      case SORT_BY.TITLE:
        result = SORT_BY.TITLE_REVERSE;
        break;
      case SORT_BY.BODY:
        result = SORT_BY.BODY_REVERSE;
        break;
      case SORT_BY.ID_REVERSE:
        result = SORT_BY.ID;
        break;
      case SORT_BY.TITLE_REVERSE:
        result = SORT_BY.TITLE;
        break;
      case SORT_BY.BODY_REVERSE:
        result = SORT_BY.BODY;
        break;
      default:
        break;
    }
    onSort(result);
    setActiveSort(result);
  };
  return (
    <div className={styles.header}>
      <div onClick={() => onClick(SORT_BY.ID)} className={styles.title}>
        <span>
          ID
          <img
            src={downArrowSvg}
            className={classNames({
              [styles.arrowDown]: activeSort === SORT_BY.ID,
              [styles.arrowUp]: activeSort === SORT_BY.ID_REVERSE,
            })}
            alt=""
          />
        </span>
      </div>
      <div onClick={() => onClick(SORT_BY.TITLE)} className={styles.title}>
        <span>
          Заголовок
          <img
            src={downArrowSvg}
            className={classNames({
              [styles.arrowDown]: activeSort === SORT_BY.TITLE,
              [styles.arrowUp]: activeSort === SORT_BY.TITLE_REVERSE,
            })}
            alt=""
          />
        </span>
      </div>
      <div onClick={() => onClick(SORT_BY.BODY)} className={styles.title}>
        <span>
          Описание
          <img
            src={downArrowSvg}
            className={classNames({
              [styles.arrowDown]: activeSort === SORT_BY.BODY,
              [styles.arrowUp]: activeSort === SORT_BY.BODY_REVERSE,
            })}
            alt=""
          />
        </span>
      </div>
    </div>
  );
}

export default TableHeader;
