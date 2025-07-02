/** @format */

import { SearchBar } from '../../UI';

const Header = () => {
  return (
    <header className='flex justify-between items-center w-full min-h-28 bg-gray-900 rounded-t-2xl py-4 px-8'>
      <h1 className='text-4xl font-bold'>NEWS & BLOGS</h1>
      <SearchBar />
    </header>
  );
};

export default Header;
