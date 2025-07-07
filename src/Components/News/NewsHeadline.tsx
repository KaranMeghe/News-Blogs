/** @format */
import { FaBookmark } from 'react-icons/fa6';
import techImg from '../../assets/images/tech.jpg';

const NewsHeadline = () => {
  return (
    <article className='w-full h-[55%] mb-2 rounded-md relative overflow-hidden'>
      <img src={techImg} alt='Headline' className='h-full w-full object-cover' />

      <div className='absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-4 flex items-center justify-between gap-4'>
        <h2 className='text-white text-lg md:text-2xl font-medium tracking-wide'>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores suscipit magnam soluta voluptate dolorem
          quam, vero libero repudiandae.
        </h2>
        <FaBookmark className='text-gray-300 text-5xl hover:text-white transition-colors cursor-pointer' />
      </div>
    </article>
  );
};

export default NewsHeadline;
