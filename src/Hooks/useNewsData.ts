/** @format */

// /** @format */

// import { useDispatch } from 'react-redux';
// import { useFetchNewsArticlesQuery } from '../Redux/Slices/News/newsApi';
// import { setCategory, setSearch } from '../Redux/Slices/News/newsSlice';

// export const useNewsData = (category?: string | null, search?: string | null) => {
//   const { data, error, isLoading } = useFetchNewsArticlesQuery({ category, search });
//   const dispatch = useDispatch();

//   const handleCategoryClick = (newsCategory: string) => {
//     return dispatch(setCategory(newsCategory.toLowerCase()));
//   };

//   const handleSearchSubmit = (query: string) => {
//     return dispatch(setSearch(query.trim()));
//   };

//   return { data, error, isLoading, handleCategoryClick, handleSearchSubmit };
// };

/** @format */
import { useSelector, useDispatch } from 'react-redux';
import { useFetchNewsArticlesQuery } from '../Redux/Slices/News/newsApi';
import { setCategory, setSearch } from '../Redux/Slices/News/newsSlice';
import type { RootState } from '../Redux/store';

export const useNewsData = () => {
  const dispatch = useDispatch();
  const { category, search } = useSelector((state: RootState) => state.news);

  const { data, error, isLoading } = useFetchNewsArticlesQuery({ category, search });

  const handleCategoryClick = (newsCategory: string) => {
    dispatch(setCategory(newsCategory.toLowerCase()));
    dispatch(setSearch('')); // optional: clear search when category is clicked
  };

  const handleSearchSubmit = (query: string) => {
    dispatch(setSearch(query.trim()));
  };

  return { data, error, isLoading, handleCategoryClick, handleSearchSubmit };
};
