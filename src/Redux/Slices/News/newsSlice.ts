/** @format */

import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { NewsCategory, NewsArticle } from './types';

const initialState: NewsCategory = {
  category: 'genral',
  search: '',
  modalIndex: null,
  bookmark: [],
  isBookMarkOpen: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,

  reducers: {
    // Set Selected News Category
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    // Search query entered by user
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    // Clear Search
    clearSearch: (state, action: PayloadAction<string | null>) => {
      state.search = action.payload;
    },
    // Toggle the Modal
    toggleModal: (state, action: PayloadAction<number | null>) => {
      state.modalIndex = action.payload;
    },
    // Add BookMark
    addBookMark: (state, action: PayloadAction<NewsArticle>) => {
      state.bookmark?.push(action.payload);
    },
    // Toggle Bookmark Modal
    toggleBookmarkModal: (state) => {
      state.isBookMarkOpen = !state.isBookMarkOpen;
    },
  },
});

export const { setCategory, setSearch, clearSearch, toggleModal, addBookMark, toggleBookmarkModal } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
