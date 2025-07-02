/** @format */

import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  return (
    <form className='relative'>
      <div>
        <input
          type='text'
          className='border border-black bg-[#111214] px-4 py-2 rounded-full w-md outline-gray-800'
          placeholder='Search News'
        />
        <div>
          <FaSearch className='absolute right-4 top-3 text-gray-400' />
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
