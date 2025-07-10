/** @format */

import { FaBookmark } from 'react-icons/fa';
import NewsModalBox from './NewsModalBox';
import { useSelector } from 'react-redux';
import type { RootState } from '../../Redux/store';
import { useNewsData } from '../../Hooks/useNewsData';
import type { NewsCardProps } from '../../Types/News';
import NewsBookMark from './NewsBookMark';

const NewsCard = ({ news, index }: NewsCardProps) => {
  const { modalIndex, isBookMarkOpen } = useSelector((state: RootState) => state.news);
  const { handleModalOpen, handleModalClose, handleAddBookamrk } = useNewsData();

  return (
    <>
      <div
        className='flex gap-4 bg-[#1b1d21] p-4 rounded-lg shadow-md hover:bg-[#2a2c30] transition-colors duration-200'
        onClick={() => handleModalOpen(index)}>
        <img src={news.image} alt={news.title} className='w-32 h-24 object-cover rounded-md shrink-0' />
        <div className='flex flex-col justify-between w-full'>
          <h3 className='text-lg text-white font-semibold line-clamp-2'>{news.title}</h3>
          <div className='flex justify-between items-center mt-2'>
            <p className='text-sm text-gray-400'>{new Date(news.publishedAt).toLocaleDateString()}</p>
            <FaBookmark
              className='text-white cursor-pointer hover:text-yellow-400 transition-colors'
              onClick={() => handleAddBookamrk(news)}
            />
          </div>
        </div>
      </div>

      {modalIndex === index && <NewsModalBox onClose={handleModalClose} news={news} />}
      {isBookMarkOpen && <NewsBookMark />}
    </>
  );
};

export default NewsCard;
