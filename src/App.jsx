import { useState, useEffect } from 'react';
import './App.css';
import { Section } from './components/Section';

function App() {

  const API_URL_3v = 'https://api.themoviedb.org/3';
  const API_URL_4v = 'https://api.themoviedb.org/4/list/10?page=1&api_key=';
  const API_URL_TRENDING = 'https://api.themoviedb.org/3/trending/all/day?api_key=';
  const API_KEY = '2d1ea5bb9d0f92154b9db9cc98f6c371';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w200';

  const [dataApi, setDataApi] = useState([]);
  console.log(dataApi);
  const fetchData = (url, key, setDataState) => {

    fetch(`${url}${key}`)
      .then(res => res.json())
      .then(data => {
        //console.log(data.results);
        setDataState(data.results)

      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchData(API_URL_4v, API_KEY, setDataApi);
    //fetchData(API_URL_TRENDING, API_KEY, setDataApi);
  }, []);


  return (
    <div className="App">
      <Section title='Tendencias' data={dataApi} />
      <Section title='Trending...' data={dataApi} />
    </div>
  );
}

export default App;
