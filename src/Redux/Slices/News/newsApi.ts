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
    fetchNewsArticles: builder.query<NewsApiResponse, string | null>({
      query: (category) => `top-headlines?category=${category}&lang=en&apikey=${API_KEY}`,
    }),
  }),
});

export const { useFetchNewsArticlesQuery } = newsApi;
