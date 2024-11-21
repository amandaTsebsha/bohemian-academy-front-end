import React, {useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
    .then(response => { setData(response.data);
      
    }).catch(error => console.log(error));

  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>
          {data ? data.message : 'Loading..'}
        </h1>
        <h2>Our Offerings: </h2>
        <ul>
          {data &&data.offerings.map((offering, index) => (
            <li key={index}>{offering}</li>
          ))}
        </ul>
        <button>{data && data.cta}</button>
      </header>
    </div>
  );
}

export default App;