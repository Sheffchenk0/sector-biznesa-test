import React from 'react';
import styles from './Table.module.scss';

import { IPost } from 'models/IPost';
import TableHeader from 'components/TableHeader/TableHeader';
import Loader from 'components/Loader/Loader';
import TableItem from 'components/TableItem/TableItem';

interface ITable {
  posts: IPost[];
  isLoading: boolean;
  error: string;
  onSort: (id: number) => void;
}

function Table({ posts, isLoading, error, onSort }: ITable) {
  return (
    <div className={styles.table}>
      <TableHeader onSort={onSort} />
      {isLoading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {error && <div className={styles.error}>{error}</div>}
      {!error && !isLoading && posts.map((post, id) => <TableItem post={post} key={id} />)}
    </div>
  );
}

export default Table;
