/** @format */

import type { NewsArticle } from '../Redux/Slices/News/types';

export interface NewsModalBoxProps {
  onClose: () => void;
  news: NewsArticle;
}

export interface NewsCardProps {
  news: NewsArticle;
  index: number;
}
