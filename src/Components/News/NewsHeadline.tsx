/** @format */
import { FaBookmark } from 'react-icons/fa6';
import { useNewsData } from '../../Hooks/useNewsData';
import NewsError from './NewsError';
import { openInNewsTab } from '../../utils/openInNewsTab';

const NewsHeadline = () => {
  const { data, error, isLoading } = useNewsData();
  if (!data?.articles?.length) return null;
  const newsHeadline = data?.articles[0];

  if (error) return <NewsError />;
  return (
    <article
      className='w-full h-[60%] mb-2 rounded-md relative overflow-hidden'
      onClick={() => openInNewsTab(newsHeadline?.url)}>
      {isLoading ? (
        <div className='absolute bottom-[50%] right-[50%]  text-center text-4xl'>Loading....</div>
      ) : (
        <>
          <img src={newsHeadline?.image} alt='Headline' className='h-full w-full object-cover' />
          <div className='absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-sm p-4 flex items-center justify-between gap-4'>
            <h2 className='text-white text-lg md:text-2xl font-medium tracking-wide'>{newsHeadline?.title}</h2>
            <FaBookmark className='text-gray-300 text-4xl hover:text-white transition-colors cursor-pointer' />
          </div>
        </>
      )}
    </article>
  );
};

export default NewsHeadline;
