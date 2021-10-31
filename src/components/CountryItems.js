import { Link } from 'react-router-dom';

const CountryItems = (props) => {
  const { countryName, population, capital, region, flag, setRoute } = props;

  function handleclick() {
    setRoute(countryName);
  }

  return (
    <>
      <div
        onClick={handleclick}
        className='w-[300px] max-h-[450px] shadow-normal dark:shadow-normal rounded-md mx-auto my-10 cursor-pointer dark:bg-DarkBlue dark:text-gray-300'
      >
        <Link to={`/${countryName}`}>
          <img
            src={flag}
            className=' w-[300px] rounded-t-md shadow-sm '
            alt=''
          />
        </Link>
        <div className='p-5 font-Nuto h-[50%]'>
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
    </>
  );
};

export default CountryItems;
