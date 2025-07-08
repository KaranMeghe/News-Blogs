/** @format */

import { FaBookmark } from 'react-icons/fa6';
import { newsCategories } from '../../Constants/Categories';
import { useNewsData } from '../../Hooks/useNewsData';

const Categories = () => {
  const { handleCategoryClick } = useNewsData();

  return (
    <nav className='w-full h-[55%] bg-[#111214] rounded-md flex flex-col px-4 py-5 overflow-hidden'>
      <h2 className='text-3xl text-white font-semibold mb-4 text-center border-b border-gray-700 pb-2 tracking-wide'>
        CATEGORIES
      </h2>

      <ul className='flex flex-col gap-6 items-center  overflow-y-auto pr-2 custom-scrollbar uppercase text-[#ddd]font-light text-xl text-center'>
        {newsCategories.map((category) => (
          <li
            key={category}
            className='hover:bg-[#22242a] rounded-md transition-colors cursor-pointer px-2'
            onClick={() => handleCategoryClick(category.toLowerCase())}>
            {category}
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
