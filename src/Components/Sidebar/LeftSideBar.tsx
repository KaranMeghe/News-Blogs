/** @format */

import Categories from './Categories';
import UserBox from './UserBox';

const LeftSideBar = () => {
  return (
    <aside className='flex flex-col gap-8 w-[20%] h-full'>
      <UserBox />
      <Categories />
    </aside>
  );
};

export default LeftSideBar;
