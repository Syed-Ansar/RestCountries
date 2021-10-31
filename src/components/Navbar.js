import { RiMoonLine } from 'react-icons/ri';
import { MdLightMode } from 'react-icons/md';

const Navbar = (props) => {
  const { isEnable, setIsEnable } = props;

  function handleMode() {
    setIsEnable(!isEnable);
  }

  return (
    <div>
      <div className=' bg-main dark:bg-DarkBlue w-screen h-24 md:h-16 text-black dark:text-white font-medium flex flex-row items-center justify-between shadow-md '>
        <a href='/' className='text-md md:text-base ml-5 sm:ml-8 md:ml-12'>
          Where in the World?
        </a>
        <div className='text-sm mr-5 sm:mr-8 md:mr-12'>
          <div
            className='flex flex-row items-center cursor-pointer'
            onClick={handleMode}
          >
            {!isEnable ? (
              <RiMoonLine className='mr-2 text-lg ' />
            ) : (
              <MdLightMode className='mr-2 text-lg ' />
            )}
            <h1 className='text-gray-800 dark:text-white font-Nuto font-normal'>
              {!isEnable ? 'Dark Mode' : 'Light Mode'}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
