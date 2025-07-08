/** @format */

import { useNewsData } from '../../Hooks/useNewsData';
import { isFetchBaseQueryError } from '../../utils/isFetchBaseQueryError';

const NewsError = () => {
  const { error } = useNewsData();
  if (isFetchBaseQueryError(error)) {
    const errorMessage = (error.data as { errors?: string[] })?.errors?.[0] ?? 'Something went wrong';

    return <div className='w-full h-[55%] text-4xl text-center text-red-500'>{errorMessage}</div>;
  }
};

export default NewsError;
