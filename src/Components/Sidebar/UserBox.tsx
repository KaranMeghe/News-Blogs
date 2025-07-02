/** @format */
import userImg from '../../assets/images/user.jpg';

const UserBox = () => {
  return (
    <div className='w-full h-[20%] bg-[#111214] rounded-md flex flex-col justify-center items-center gap-4'>
      <img
        src={userImg}
        alt='user image'
        className='rounded-full w-24 h-24 object-cover border-2 border-[#6877f4] shadow'
      />
      <p>Nick's Blog</p>
    </div>
  );
};

export default UserBox;
