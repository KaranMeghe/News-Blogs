/** @format */

import { FaBookmark } from 'react-icons/fa6';
import { newsCategories } from '../../Constants/Categories';

const Categories = () => {
  return (
    <nav className='w-full max-h-[80%] bg-[#111214] rounded-md flex flex-col px-4 py-5 overflow-hidden'>
      <h2 className='text-3xl text-white font-semibold mb-4 text-center border-b border-gray-700 pb-2 tracking-wide'>
        CATEGORIES
      </h2>

      <ul className='flex flex-col gap-3 items-center  overflow-y-auto pr-2 custom-scrollbar uppercase text-[#ddd]font-light text-xl text-center'>
        {newsCategories.map((news) => (
          <li key={news} className='hover:bg-[#22242a] rounded-md transition-colors cursor-pointer px-2'>
            {news}
          </li>
        ))}
        <li className='flex justify-center items-center w-full gap-4 p-2 hover:bg-[#22242a] rounded-md transition-colors border-t  border-zinc-400'>
          Bookmark
          <span className=''>
            <FaBookmark />
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
