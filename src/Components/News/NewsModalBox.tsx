/** @format */

import { formatNewsDate } from '../../utils/formatNewDate';
import { openInNewsTab } from '../../utils/openInNewsTab';
import type { NewsModalBoxProps } from '../../Types/News';

const NewsModalBox = ({ onClose, news }: NewsModalBoxProps) => {
  const iso = news.publishedAt;
  const formatted = formatNewsDate(iso);
  return (
    <div className='fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50' onClick={onClose}>
      <div
        className='bg-[#1b1d21] text-white w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] xl:w-[30%] h-[70%] p-6 rounded-2xl shadow-lg overflow-y-auto relative flex flex-col items-start'
        onClick={(e) => e.stopPropagation()}>
        <button className='absolute top-4 right-4 bg-gray-600 hover:bg-gray-700 px-3 py-1 rounded' onClick={onClose}>
          ❌
        </button>
        <div className='flex flex-col gap-2'>
          <img src={news.image} className='' alt={news.title} />
          <h2 className='text-2xl font-bold mb-4'>{news.title}</h2>
          <div className='text-md text-gray-400'>
            <p>Source: {news.source.name}</p>
            <p>{formatted}</p>
          </div>
          <p className='my-4 text-md'>{news.content}</p>
        </div>

        <button
          className='text-white font-bold rounded-full px-6 py-2 bg-button hover:opacity-90 transition-all'
          onClick={() => openInNewsTab(news.url)}>
          READ MORE
        </button>
      </div>
    </div>
  );
};

export default NewsModalBox;
