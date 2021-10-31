import Countries from './components/Countries';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [region, setRegion] = useState('Asia');
  const [allCountries, setAllCountries] = useState([]);
  const [term, setTerm] = useState('');

  return (
    <div>
      <Navbar region={region} setRegion={setRegion} setTerm={setTerm} />
      <Countries
        region={region}
        allCountries={allCountries}
        setAllCountries={setAllCountries}
        term={term}
      />
    </div>
  );
}

export default App;
