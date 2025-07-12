/** @format */
import { useSelector, useDispatch } from 'react-redux';
import { useFetchNewsArticlesQuery } from '../Redux/Slices/News/newsApi';
import {
  addBookMark,
  clearSearch,
  deleteBookmark,
  setCategory,
  setSearch,
  toggleBookmarkModal,
} from '../Redux/Slices/News/newsSlice';
import type { RootState } from '../Redux/store';
import { toggleModal } from '../Redux/Slices/News/newsSlice';
import type { NewsArticle } from '../Redux/Slices/News/types';

export const useNewsData = () => {
  const dispatch = useDispatch();
  const { category, search } = useSelector((state: RootState) => state.news);

  const { data, error, isLoading } = useFetchNewsArticlesQuery({ category, search });

  const handleCategoryClick = (newsCategory: string) => {
    dispatch(setCategory(newsCategory.toLowerCase()));
    dispatch(clearSearch(''));
  };

  const handleSearchSubmit = (query: string) => {
    dispatch(setSearch(query.trim()));
  };

  const handleModalOpen = (index: number) => {
    dispatch(toggleModal(index));
  };

  const handleModalClose = () => {
    dispatch(toggleModal(null));
  };

  const handleAddBookamrk = (news: NewsArticle) => {
    dispatch(addBookMark(news));
  };

  const handleDeleteBookMark = (index: number) => {
    dispatch(deleteBookmark(index));
  };

  const handleToggleBookmark = () => {
    dispatch(toggleBookmarkModal());
  };

  return {
    data,
    error,
    isLoading,
    handleCategoryClick,
    handleSearchSubmit,
    handleModalOpen,
    handleModalClose,
    handleAddBookamrk,
    handleToggleBookmark,
    handleDeleteBookMark,
  };
};
