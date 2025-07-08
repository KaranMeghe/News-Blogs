/** @format */

import type { RootState } from '../../Redux/store';
import { NewsHeadline, NewsBox } from '../index';
import { useSelector } from 'react-redux';

const News = () => {
  const { category } = useSelector((state: RootState) => state.news);
  return (
    <section className='w-[70%] h-[calc(100vh-40px)] flex flex-col gap-2'>
      <NewsHeadline category={category} />
      <NewsBox category={category} />
    </section>
  );
};

export default News;
