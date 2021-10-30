import { useState } from 'react';
import { useEffect } from 'react';
import CountryItems from './CountryItems';

const Countries = (props) => {
  const { region, searchTerm } = props;
  const [country, setCountry] = useState([]);
  const [filter, setFilter] = useState(searchTerm);

  const Apidata = async () => {
    const Url = `https://restcountries.com/v3.1/all`;
    const res = await fetch(Url);
    const data = await res.json();
    setCountry(data);
  };

  useEffect(() => {
    Apidata();
  }, []);

  const RegionApidata = async () => {
    const Url = `https://restcountries.com/v3.1/region/${region}`;
    const res = await fetch(Url);
    const data = await res.json();
    setCountry(data);
  };

  useEffect(() => {
    RegionApidata();
  }, [region]);

  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6'>
      {country?.map((items) => {
        const { name, region, population, capital, flags } = items;
        return (
          <CountryItems
            key={name.official}
            countryName={name.official}
            region={region}
            population={
              population ? population.toLocaleString('en-US') : population
            }
            capital={capital}
            flag={flags.png}
          />
        );
      })}
    </div>
  );
};

export default Countries;
