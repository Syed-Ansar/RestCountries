import Countries from './components/Countries';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  const [region, setRegion] = useState('Asia');
  const [searchTerm, setSearchTerm] = useState('');
  // console.log(searchTerm);
  return (
    <div>
      <Navbar
        region={region}
        setRegion={setRegion}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Countries region={region} searchTearm={searchTerm} />
    </div>
  );
}

export default App;
