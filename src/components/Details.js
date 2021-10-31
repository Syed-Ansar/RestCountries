import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import axios from 'axios';

const Details = (props) => {
  const { route, setLoading, loading } = props;
  const [data, setData] = useState();
  const [lang, setLang] = useState([]);
  const [currencies, setCurrencies] = useState('');
  const [nativeLang, setNativeLang] = useState();

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${route}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
      )
      .then((res) => {
        setLoading(true);
        setData(res.data[0]);
        setLoading(false);
        let language = res.data[0].languages;

        language = Object.keys(language);
        // Last language of country
        setNativeLang(language[Object.keys(language).length - 1]);
        language.forEach((item) => {
          let newArray = lang;
          newArray.push(res.data[0].languages[item]);
          setLang(newArray);
        });
        let curr = res.data[0].currencies;
        setCurrencies(curr[Object.keys(curr)[0]].name);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleBack() {
    window.history.back();
  }

  return (
    <div className='md:h-[100vh] w-screen p-6 md:p-10 overflow-y-hidden dark:text-gray-50'>
      <div
        className='flex flex-row justify-center w-28 rounded-md  md:px-6 py-1.5 md:py-2 my-4 shadow-normal dark:bg-DarkBlue cursor-pointer'
        onClick={handleBack}
      >
        <p className='pr-2 md:pr-4'> &#8592; </p>
        <p>Back</p>
      </div>
      <div className='w-full mt-14 md:mt-20'>
        {loading ? (
          <Loader />
        ) : (
          <div className='flex flex-col md:flex-row'>
            <div className='mb-10'>
              <img
                className=''
                src={data?.flags?.png ? data.flags.png : 'Null'}
                alt={data?.name?.common ? data.name.common : 'Flag'}
              />
            </div>
            <div className='flex flex-col md:ml-16 lg:ml-24 xl:ml-40'>
              <h1 className='text-3xl md:text-4xl mb-6 font-normal'>{route}</h1>
              <div>
                <div className='flex flex-col md:flex-row items-start'>
                  <div className=' font-cuslight text-gray-900 dark:text-gray-50 md:space-y-1.5'>
                    <h1>
                      Native Name :{' '}
                      <span className='font-light text-sm'>
                        {nativeLang
                          ? data.name.nativeName[nativeLang].common
                          : null}
                      </span>
                    </h1>
                    <h1>
                      {' '}
                      Population :{' '}
                      <span className='font-light text-sm'>
                        {data?.population
                          ? data.population.toLocaleString('en-US')
                          : null}
                      </span>
                    </h1>
                    <h1>
                      {' '}
                      Region :{' '}
                      <span className='font-light text-sm'>
                        {data?.region ? data.region : null}
                      </span>
                    </h1>
                    <h1>
                      {' '}
                      Sub Region :{' '}
                      <span className='font-light text-sm'>
                        {data?.subregion ? data.subregion : null}
                      </span>
                    </h1>
                    <h1>
                      {' '}
                      Capital :{' '}
                      <span className='font-light text-sm'>
                        {data?.capital ? data.capital : null}
                      </span>
                    </h1>
                  </div>
                  <div className='font-cuslight mt-6 md:mt-0 md:ml-16 lg:ml-24 xl:ml-40 md:space-y-1.5'>
                    <h1>
                      {' '}
                      Top Level Domain :{' '}
                      <span className='font-light text-sm'>
                        {data?.tld ? data.tld : null}
                      </span>
                    </h1>
                    <h1>
                      {' '}
                      Currencies :{' '}
                      <span className='font-light text-sm'>
                        {currencies ? currencies.toLocaleString('en-US') : null}
                      </span>
                    </h1>
                    <h1>
                      {' '}
                      Languages :{' '}
                      <span className='font-light text-sm'>
                        {lang.map((item, index) => (
                          <span key={item}>{item},</span>
                        ))}
                      </span>
                    </h1>
                  </div>
                </div>
                <div className='flex flex-col text-gray-800 dark:text-gray-50 font-cuslight mt-6'>
                  <div>Border Countries :</div>
                  <div className='flex flex-row mt-4 font-light text-sm'>
                    {data?.borders?.length ? (
                      data.borders.map((border, index) => (
                        <span key={index} className={'border-item'}>
                          <h1 className='mr-4 w-24 text-center p-1 dark:bg-DarkBlue  rounded-sm shadow-normal'>
                            {border}
                          </h1>
                        </span>
                      ))
                    ) : (
                      <span className='mr-4  text-center p-1 dark:bg-DarkBlue  rounded-sm shadow-normal'>
                        No border countries
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
