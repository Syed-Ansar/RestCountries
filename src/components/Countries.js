import { useState } from 'react';
import { useEffect } from 'react';
import CountryItems from './CountryItems';

const Countries = (props) => {
  const { region, setAllCountries, allCountries, term } = props;
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const Apidata = async () => {
      const Url = `https://restcountries.com/v3.1/all`;
      const res = await fetch(Url);
      const data = await res.json();
      setCountry(data);
      setAllCountries(data);
    };
    Apidata();
  }, []);

  useEffect(() => {
    const RegionApidata = async () => {
      const Url = `https://restcountries.com/v3.1/region/${region}`;
      const res = await fetch(Url);
      const data = await res.json();
      setCountry(data);
    };
    RegionApidata();
  }, [region]);

  useEffect(() => {
    let newData = allCountries.filter((item) =>
      item.name.common.toLowerCase().includes(term)
    );
    setCountry(newData);
  }, [term]);

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
      {country?.map((items) => {
        const { name, region, population, capital, flags } = items;
        return (
          <CountryItems
            key={name.common}
            countryName={name.common}
            region={region}
            population={
              population ? population.toLocaleString('en-US') : population
            }
            capital={capital}
            flag={flags.svg}
          />
        );
      })}
    </div>
  );
};

export default Countries;
