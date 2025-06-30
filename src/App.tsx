/** @format */
import AppLayout from './Components/AppLayout';

function App() {
  return (
    <div className='w-full h-screen grid place-items-center bg-custom-gradient'>
      <div className='w-[95vw] h-[95vh] app-bg text-white shadow-2xl rounded-xl text-2xl'>
        <AppLayout />
      </div>
    </div>
  );
}

export default App;
