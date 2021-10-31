import React from 'react';

const Loader = () => {
  return (
    <div>
      <div className='flex justify-center items-center w-screen'>
        <div
          className='animate-spin
      rounded-full
      h-20
      w-20
      border-t-2 
      border-b-2 
      border-gray-900 
      dark:border-gray-50'
        ></div>
      </div>
    </div>
  );
};

export default Loader;
