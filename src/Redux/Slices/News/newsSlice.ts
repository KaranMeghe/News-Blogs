/** @format */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { NewsCategory } from './types';

const initialState: NewsCategory = {
  category: 'genral',
  search: '',
  modalIndex: null,
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
    clearSearch: (state, action: PayloadAction<string | null>) => {
      state.search = action.payload;
    },
    toggleModal: (state, action: PayloadAction<number | null>) => {
      state.modalIndex = action.payload;
    },
  },
});

export const { setCategory, setSearch, clearSearch, toggleModal } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
