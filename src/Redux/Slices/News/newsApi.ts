/** @format */

import { createApi } from '@reduxjs/toolkit/query/react';
import type { NewsApiResponse } from './types';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const url = 'https://gnews.io/api/v4';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),

  endpoints: (builder) => ({
    fetchNewsArticles: builder.query<NewsApiResponse, { category?: string | null; search?: string | null }>({
      query: ({ category, search }) => {
        if (search) {
          return {
            url: `/search?q=${search}&lang=en&apikey=${API_KEY}`,
            method: 'GET',
          };
        }

        return {
          url: `/top-headlines?category=${category || 'general'}&lang=en&apikey=${API_KEY}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useFetchNewsArticlesQuery } = newsApi;
