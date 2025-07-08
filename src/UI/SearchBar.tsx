/** @format */

import { FaSearch } from 'react-icons/fa';
import { useRef } from 'react';
import { useNewsData } from '../Hooks/useNewsData';

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { handleSearchSubmit } = useNewsData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputRef.current?.value.trim();
    if (query) {
      return handleSearchSubmit(query);
    }
  };

  return (
    <form className='relative' onSubmit={handleSubmit}>
      <div>
        <input
          ref={inputRef}
          type='text'
          className='border border-black bg-[#111214] px-4 py-2 rounded-full w-md outline-gray-800'
          placeholder='Search News'
        />
        <button type='submit'>
          <FaSearch className='absolute right-4 top-3 text-gray-400 cursor-pointer' />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
