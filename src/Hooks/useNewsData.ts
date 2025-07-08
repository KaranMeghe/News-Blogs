/** @format */

import { useFetchNewsArticlesQuery } from '../Redux/Slices/News/newsApi';

export const useNewsData = () => {
  const { data, error, isLoading } = useFetchNewsArticlesQuery();

  return { data, error, isLoading };
};
