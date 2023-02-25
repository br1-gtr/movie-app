import { useState, useEffect } from 'react';
import './App.css';
import { Section } from './components/Section';

//const APY_KEY = 2d1ea5bb9d0f92154b9db9cc98f6c371
function App() {

  const [dataApi, setDataApi] = useState('');

  useEffect(() => {

    const API_KEY = '2d1ea5bb9d0f92154b9db9cc98f6c371';
    const ID = '10';
    fetch(`https://api.themoviedb.org/4/list/${ID}?page=1&api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setDataApi(data.results))
      .catch(err => console.log(err))

  }, []);

  return (
    <div className="App">
      <Section title='Tendencias' data={dataApi} />
    </div>
  );
}

export default App;
