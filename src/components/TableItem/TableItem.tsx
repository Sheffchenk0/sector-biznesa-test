import React from 'react';
import styles from 'components/TableItem/TableItem.module.scss';
import { IPost } from 'models/IPost';

interface ITableItem {
  post: IPost;
}

function TableItem({ post }: ITableItem) {
  return (
    <div className={styles.item}>
      <div className={styles.col}>{post.id}</div>
      <div className={styles.col}>{post.title}</div>
      <div className={styles.col}>{post.body}</div>
    </div>
  );
}

export default TableItem;
