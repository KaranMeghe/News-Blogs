/** @format */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { NewsCategory } from './types';

const initialState: NewsCategory = {
  category: 'genral',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,

  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
