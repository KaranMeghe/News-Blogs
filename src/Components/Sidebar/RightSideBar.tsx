/** @format */

import { Calender, Weather } from '../../UI';

const RightSideBar = () => {
  return (
    <aside className='w-[25%] h-full flex flex-col gap-4'>
      <Weather />
      <Calender />
    </aside>
  );
};

export default RightSideBar;
