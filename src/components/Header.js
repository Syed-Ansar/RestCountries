import { HiSearch } from 'react-icons/hi';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useRef, useState } from 'react';

const Header = (props) => {
  const [dropDown, setDropDown] = useState(true);

  const input = useRef();

  const { setRegion, setTerm } = props;
  const handleRegion = (event) => {
    setRegion(event.target.value);
    setDropDown(!dropDown);
  };

  function handleSearchTerm(event) {
    let current = input.current.value.toLowerCase();
    setTerm(current);
  }

  const handleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div>
      <div className='w-screen px-6 sm:px-16 md:px-10  flex flex-col md:flex-row md:items-center justify-between my-10 relative'>
        <div className='flex flex-row items-center'>
          <HiSearch className=' text-xl text-[#858585]  absolute left-14 sm:left-24 md:left-20 ' />
          <input
            type='text'
            ref={input}
            onChange={handleSearchTerm}
            placeholder='Search for a country...'
            className='w-screen md:w-80 lg:w-[32rem] h-14 pl-20 lg:pl-20 outline-none rounded-md placeholder-gray-300 text-[#858585] text-sm shadow-normal dark:bg-DarkBlue dark:text-gray-300'
          />
        </div>
        <div className='flex flex-col '>
          <div
            className='w-48 h-14 rounded-md shadow-normal p-5 flex flex-row items-center justify-between cursor-pointer mt-8 md:mt-0 font-Nuto font-normal text-gray-600 dark:bg-DarkBlue dark:text-gray-300'
            onClick={handleDropdown}
          >
            Filter by Region
            <div>{dropDown ? <FiChevronDown /> : <FiChevronUp />}</div>
          </div>
          <div
            className={
              dropDown
                ? 'hidden'
                : 'bg-white dark:bg-DarkBlue  w-[193px] h-[150px] absolute top-[152px] md:top-16 rounded-md shadow-normal'
            }
          >
            <div className='flex flex-col justify-evenly p-5 text-sm text-gray text-gray-600 dark:text-gray-300'>
              <div onClick={handleRegion}>
                <option
                  value='Africa'
                  className='pb-1 font-normal cursor-pointer'
                >
                  Africa
                </option>
                <option
                  value='America'
                  className='pb-1 font-normal cursor-pointer'
                >
                  America
                </option>
                <option
                  value='Asia'
                  className='pb-1 font-normal cursor-pointer'
                >
                  Asia
                </option>
                <option
                  value='Europe'
                  className='pb-1 font-normal cursor-pointer'
                >
                  Europe
                </option>
                <option
                  value='Oceania'
                  className='pb-1 font-normal cursor-pointer'
                >
                  Oceania
                </option>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
