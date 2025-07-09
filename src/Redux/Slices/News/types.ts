/** @format */

export interface NewsCategory {
  category: string | null;
  search: string | null;
  modalIndex: number | null;
}
interface NewsSource {
  name: string;
  url: string;
}
export interface NewsArticle {
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  source: NewsSource;
}
export interface NewsApiResponse {
  totalArticles: number;
  articles: NewsArticle[];
}
