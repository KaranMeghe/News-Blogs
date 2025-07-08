/** @format */

import { NewsHeadline, NewsBox } from '../index';

const News = () => {
  return (
    <section className='w-[70%] h-[calc(100vh-40px)] flex flex-col gap-2'>
      <NewsHeadline />
      <NewsBox />
    </section>
  );
};

export default News;
