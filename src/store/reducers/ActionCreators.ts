import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IPost } from 'models/IPost';
import { IQueryParams } from 'models/IQueryParams';

const instance = axios.create({
  baseURL: 'http://jsonplaceholder.typicode.com/',
});

export const fetchPosts = createAsyncThunk(
  'post/fetchAll',
  async (params: IQueryParams, thunkAPI) => {
    try {
      const response = await instance.get<IPost[]>('posts', {
        params,
      });
      console.log(response);

      return { data: response.data, count: response.headers['x-total-count'] };
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить пользователей');
    }
  },
);
