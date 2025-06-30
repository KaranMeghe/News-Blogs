/** @format */
import { Header, News, LeftSideBar, Blogs, RightSideBar, Footer } from './index';

const AppLayout = () => {
  return (
    <div className='w-full h-full flex flex-col'>
      <Header />

      <main className='flex h-full w-full p-4 gap-8'>
        <LeftSideBar />
        <News />
        <Blogs />
        <RightSideBar />
      </main>

      <Footer />
    </div>
  );
};

export default AppLayout;
