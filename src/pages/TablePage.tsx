import React, { useEffect, useState } from 'react';
import styles from 'App.module.scss';
import Input from 'components/Input/Input';
import Pagination from 'components/Pagination/Pagination';
import Table from 'components/Table/Table';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { fetchPosts } from 'store/reducers/ActionCreators';
import { useSearchParams } from 'react-router-dom';
import { PAGE_LIMIT, SORT_BY } from 'lib/consts';

export const TablePage = () => {
  const { error, isLoading, posts, count } = useAppSelector((state) => state.postReducer);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState('');
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState(0);
  const page = Number(searchParams.get('_page')) || 1;

  const onInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
  };
  const onSort = (id: number) => {
    setSort(id);
  };
  useEffect(() => {
    let sortParams = {};
    switch (sort) {
      case SORT_BY.ID:
        sortParams = { _sort: 'id' };
        break;
      case SORT_BY.ID_REVERSE:
        sortParams = { _sort: 'id', _order: 'desc' };
        break;
      case SORT_BY.BODY:
        sortParams = { _sort: 'body' };
        break;
      case SORT_BY.BODY_REVERSE:
        sortParams = { _sort: 'body', _order: 'desc' };
        break;
      case SORT_BY.TITLE:
        sortParams = { _sort: 'title' };
        break;
      case SORT_BY.TITLE_REVERSE:
        sortParams = { _sort: 'title', _order: 'desc' };
        break;

      default:
        break;
    }
    dispatch(fetchPosts({ ...sortParams, _page: page, _limit: PAGE_LIMIT }));
  }, [page, sort]);

  return (
    <div className={styles.container}>
      <div className={styles.input_wrapper}>
        {<Input value={inputValue} onChange={onInputChange} />}
      </div>
      <Table
        onSort={onSort}
        posts={posts.filter((post) => {
          if (!inputValue) {
            return true;
          } else {
            const value = inputValue.trim().toLowerCase();
            if (
              String(post.id).indexOf(value) !== -1 ||
              post.title.toLowerCase().indexOf(value) !== -1 ||
              post.body.toLowerCase().indexOf(value) !== -1
            ) {
              return true;
            }
          }
          return false;
        })}
        isLoading={isLoading}
        error={error}
      />
      {posts.length > 0 && <Pagination pages={Math.ceil(count / PAGE_LIMIT)} currentPage={page} />}
    </div>
  );
};
