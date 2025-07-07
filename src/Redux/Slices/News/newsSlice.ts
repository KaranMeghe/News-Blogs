/** @format */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { NewsState } from './types';

const initialState: NewsState = {
  headline: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,

  reducers: {
    setHeadline: (state, action: PayloadAction<string | null>) => {
      state.headline = action.payload;
    },
  },
});

export const { setHeadline } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
