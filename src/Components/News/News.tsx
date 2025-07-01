/** @format */

import { NewsHeadline, NewsBox } from '../index';

const News = () => {
  return (
    <section className='w-[70%] flex flex-col gap-2'>
      <NewsHeadline />
      <NewsBox />
    </section>
  );
};

export default News;
