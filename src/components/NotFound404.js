import React from 'react';

const Notfound = () => {
  function handleBack() {
    window.history.back();
  }
  return (
    <div className='p-10'>
      <div
        className='flex flex-row justify-center w-28 rounded-md  px-6 py-2 my-4 shadow-normal dark:bg-DarkBlue dark:text-gray-50'
        onClick={handleBack}
      >
        <p className='pr-4'> &#8592; </p>
        <p>Back</p>
      </div>
      <div className='dark:bg-veryDark dark:text-gray-50 h-[100vh] text-4xl flex flex-row justify-center  mt-48'>
        Not Found
      </div>
    </div>
  );
};

export default Notfound;
