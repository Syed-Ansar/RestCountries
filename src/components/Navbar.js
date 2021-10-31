import { RiMoonLine } from 'react-icons/ri';
import Header from './Header';

const Navbar = (props) => {
  const { region, setRegion, setTerm } = props;

  return (
    <div>
      <div className=' bg-main w-screen h-24 md:h-16 text-black font-medium flex flex-row items-center justify-between shadow-md '>
        <a href='/' className='text-md md:text-base ml-5 sm:ml-8 md:ml-12'>
          Where in the World?
        </a>
        <div className='text-sm mr-5 sm:mr-8 md:mr-12'>
          <div className='flex flex-row items-center cursor-pointer'>
            <RiMoonLine className='mr-2 text-lg ' />
            <h1 className='text-gray-800 font-Nuto font-normal'>Dark Mode</h1>
          </div>
        </div>
      </div>
      <Header region={region} setRegion={setRegion} setTerm={setTerm} />
    </div>
  );
};

export default Navbar;
