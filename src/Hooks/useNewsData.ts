/** @format */

import { useDispatch } from 'react-redux';
import { useFetchNewsArticlesQuery } from '../Redux/Slices/News/newsApi';
import { setCategory } from '../Redux/Slices/News/newsSlice';

export const useNewsData = (category: string | null) => {
  const { data, error, isLoading } = useFetchNewsArticlesQuery(category);
  const dispatch = useDispatch();

  const handleCategoryClick = (newsCategory: string) => {
    return dispatch(setCategory(newsCategory.toLowerCase()));
  };
  return { data, error, isLoading, handleCategoryClick };
};
