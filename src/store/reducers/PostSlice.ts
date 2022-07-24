import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from 'models/IPost';
import { fetchPosts } from 'store/reducers/ActionCreators';

interface PostState {
  posts: IPost[];
  isLoading: boolean;
  error: string;
  count: number;
}

const initialState: PostState = {
  posts: [],
  isLoading: false,
  error: '',
  count: 0,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.fulfilled.type]: (
      state,
      action: PayloadAction<{ data: IPost[]; count: number }>,
    ) => {
      state.isLoading = false;
      state.error = '';
      state.posts = action.payload.data;
      state.count = action.payload.count;
    },
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
