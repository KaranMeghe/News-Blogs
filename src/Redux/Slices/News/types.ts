/** @format */

export interface NewsState {
  headline: string | null;
}
interface NewsSource {
  name: string;
  url: string;
}
interface NewsArticle {
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
