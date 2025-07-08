/** @format */

import { FaBookmark } from 'react-icons/fa';
import type { NewsArticle } from '../../Redux/Slices/News/types';
import { openInNewsTab } from '../../utils/openInNewsTab';
interface NewsCardProps {
  news: NewsArticle;
}

const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <div
      className='flex gap-4 bg-[#1b1d21] p-4 rounded-lg shadow-md hover:bg-[#2a2c30] transition-colors duration-200'
      onClick={() => openInNewsTab(news.url)}>
      <img src={news.image} alt={news.title} className='w-32 h-24 object-cover rounded-md shrink-0' />
      <div className='flex flex-col justify-between w-full'>
        <h3 className='text-lg text-white font-semibold line-clamp-2'>{news.title}</h3>
        <div className='flex justify-between items-center mt-2'>
          <p className='text-sm text-gray-400'>{new Date(news.publishedAt).toLocaleDateString()}</p>
          <FaBookmark className='text-white cursor-pointer hover:text-yellow-400 transition-colors' />
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
