/** @format */

import { useSelector } from 'react-redux';
import type { RootState } from '../../Redux/store';
import { useNewsData } from '../../Hooks/useNewsData';

const NewsBookMark = () => {
  const { bookmark } = useSelector((state: RootState) => state.news);
  const { handleToggleBookmark } = useNewsData();
  return (
    <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50'>
      <div className='bg-[#1b1d21] text-white w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] xl:w-[40%] h-[70%] p-6 rounded-2xl shadow-lg overflow-y-auto relative flex flex-col items-start gap-4'>
        <div className='flex justify-between w-full'>
          <h2 className='text-3xl'>BOOKMARKED NEWS</h2>
          <button onClick={handleToggleBookmark}>❌</button>
        </div>
        {bookmark?.map((news, index) => (
          <div
            key={index}
            className='flex items-center gap-4 w-full bg-[#2a2c30] rounded-lg p-4 shadow-md hover:bg-[#3a3c40] transition-colors duration-200'>
            <img src={news.image} alt={news.title} className='w-28 h-20 object-cover rounded-md shadow-sm shrink-0' />

            <div className='flex justify-between items-center w-full'>
              <p className='text-sm text-gray-200 line-clamp-3 pr-4'>{news.description}</p>

              <button className='w-8 h-8 flex items-center justify-center text-xs transition' title='Remove'>
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBookMark;
