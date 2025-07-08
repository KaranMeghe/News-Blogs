/** @format */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { NewsCategory } from './types';

const initialState: NewsCategory = {
  category: 'genral',
  search: '',
};

const newsSlice = createSlice({
  name: 'news',
  initialState,

  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setCategory, setSearch } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
