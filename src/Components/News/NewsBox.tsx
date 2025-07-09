/** @format */

import { useNewsData } from '../../Hooks/useNewsData';
import NewsCard from './NewsCard';
import NewsError from './NewsError';

const NewsBox = () => {
  const { isLoading, data: newsData, error } = useNewsData();

  if (error) return <NewsError />;

  return (
    <article className='h-[38%] overflow-y-auto bg-[#111214] rounded-md p-4 grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer'>
      {isLoading ? (
        <div className='col-span-full text-center text-4xl'>Loading...</div>
      ) : (
        newsData?.articles?.map((news, index) => <NewsCard key={index} news={news} index={index} />)
      )}
    </article>
  );
};

export default NewsBox;
