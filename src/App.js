import Countries from './components/Countries';
import Navbar from './components/Navbar';
import Details from './components/Details';
import { useEffect, useState } from 'react';
import Notfound404 from './components/NotFound404';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [region, setRegion] = useState('Asia');
  const [term, setTerm] = useState('');
  const [isEnable, setIsEnable] = useState(false);
  const [loading, setLoading] = useState(true);
  const [route, setRoute] = useState('');

  useEffect(() => {
    const root = window.document.documentElement;
    {
      // Beginning of lone block
      isEnable ? root.classList.add('dark') : root.classList.remove('dark');
    } // End of lone block
  }, [isEnable]);

  return (
    <>
      <Router>
        <div className='dark:bg-veryDark'>
          <Navbar
            region={region}
            setRegion={setRegion}
            setTerm={setTerm}
            isEnable={isEnable}
            setIsEnable={setIsEnable}
          />

          <Switch>
            <Route exact path='/'>
              <Countries
                country={country}
                setCountry={setCountry}
                region={region}
                setRegion={setRegion}
                setTerm={setTerm}
                allCountries={allCountries}
                setAllCountries={setAllCountries}
                term={term}
                loading={loading}
                setLoading={setLoading}
                setRoute={setRoute}
              />
            </Route>
            <Route exact path={`/${route}`}>
              <Details
                route={route}
                setLoading={setLoading}
                loading={loading}
              />
            </Route>
            <Route exact path='/*'>
              <Notfound404 />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
