/** @format */

import techImg from '../../assets/images/tech.jpg';
import sportImg from '../../assets/images/sports.jpg';
import sciImg from '../../assets/images/science.jpg';
import healthImg from '../../assets/images/health.jpg';
import worldImg from '../../assets/images/world.jpg';
import { FaBookmark } from 'react-icons/fa';

const NewsBox = () => {
  return (
    <article className='bg-[#111214] h-full rounded-md flex justify-around gap-8'>
      <div>
        <img src={techImg} />
        <h3>
          Lorem ipsum dolor sit amet.
          <FaBookmark />
        </h3>
      </div>

      <div>
        <img src={techImg} />
        <h3>
          Lorem ipsum dolor sit amet.
          <FaBookmark />
        </h3>
      </div>

      <div>
        <img src={techImg} />
        <h3>
          Lorem ipsum dolor sit amet.
          <FaBookmark />
        </h3>
      </div>

      <div>
        <img src={techImg} />
        <h3>
          Lorem ipsum dolor sit amet.
          <FaBookmark />
        </h3>
      </div>

      <div>
        <img src={techImg} />
        <h3>
          Lorem ipsum dolor sit amet.
          <FaBookmark />
        </h3>
      </div>

      <div>
        <img src={techImg} />
        <h3>
          Lorem ipsum dolor sit amet.
          <FaBookmark />
        </h3>
      </div>
    </article>
  );
};

export default NewsBox;
