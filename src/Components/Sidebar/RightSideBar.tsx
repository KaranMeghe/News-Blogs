/** @format */

import { Calender, Weather } from '../../UI';

const RightSideBar = () => {
  return (
    <aside className='w-[25%] h-full bg-gray-400 '>
      <Weather />
      <Calender />
    </aside>
  );
};

export default RightSideBar;
