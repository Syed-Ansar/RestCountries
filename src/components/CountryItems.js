const CountryItems = (props) => {
  const { countryName, population, capital, region, flag } = props;

  function handleclick() {
    console.log(countryName);
  }

  return (
    <div
      onClick={handleclick}
      className='w-[300px]   shadow-normal rounded-md mx-auto my-10 cursor-pointer '
    >
      <img src={flag} className=' rounded-t-md shadow-sm ' alt='' />
      <div className='p-5 font-Nuto'>
        <p className=' font-medium mb-3 '>{countryName}</p>
        <p className='font-normal text-sm mb-[2.5px]'>
          Population :{' '}
          <span className='text-sm text-gray font-light'>{population}</span>
        </p>
        <p className='font-normal text-sm mb-[2.5px]'>
          Region :{' '}
          <span className='text-sm text-gray font-light'>{region}</span>
        </p>
        <p className='font-normal text-sm mb-[2.5px]'>
          Capital :{' '}
          <span className='text-sm text-gray font-light'>{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryItems;
