import { useEffect } from 'react';
import CountryItems from './CountryItems';
import Loader from './Loader';
import Header from './Header';

const Countries = (props) => {
  const {
    country,
    setCountry,
    region,
    setRegion,
    setTerm,
    setAllCountries,
    allCountries,
    term,
    loading,
    setLoading,
    setRoute,
  } = props;

  useEffect(() => {
    const Apidata = async () => {
      const Url = `https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`;
      const res = await fetch(Url);
      const data = await res.json();
      setLoading(true);
      setCountry(data);
      setLoading(false);
      setLoading(true);
      setAllCountries(data);
      setLoading(false);
    };
    Apidata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const RegionApidata = async () => {
      const Url = region && `https://restcountries.com/v3.1/region/${region}`;
      const res = region && (await fetch(Url));
      const data = region && (await res.json());
      setLoading(true);

      // Beginning of lone block
      region ? setCountry(data) : setCountry([]);
      // End of lone block
      setLoading(false);
    };
    RegionApidata();
    // eslint-disable-next-line
  }, [region]);

  useEffect(() => {
    let newData = allCountries.filter((item) =>
      item.name.common.toLowerCase().includes(term)
    );
    setLoading(true);
    setCountry(newData);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return (
    <>
      <Header region={region} setRegion={setRegion} setTerm={setTerm} />
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 min-h-screen dark:bg-veryDark'>
        {country.length <= 0 ? (
          <Loader />
        ) : (
          country?.map((items) => {
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
                loading={loading}
                setRoute={setRoute}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Countries;
