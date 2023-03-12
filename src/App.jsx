import { useState, useEffect } from 'react';
import './App.css';
import { Section } from './components/Section';

function App() {

  const API_URL_4v = 'https://api.themoviedb.org/4/list/10?page=1&api_key=';
  const API_URL_4v2 = 'https://api.themoviedb.org/4/list/10?page=2&api_key=';
  const API_URL_TRENDING = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
  const API_KEY = '2d1ea5bb9d0f92154b9db9cc98f6c371';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w200';

  const [section_1, setSection_1] = useState([]);
  const [section_2, setSection_2] = useState([]);

  useEffect(() => {
    fetchData(API_URL_TRENDING, API_KEY, setSection_1);
    fetchData(API_URL_4v, API_KEY, setSection_2);
  }, []);


  const fetchData = (url, key, setDataState) => {
    fetch(`${url}${key}`)
      .then(res => res.json())
      .then(data => { console.log(data.results); setDataState(data.results); })
      .catch(err => console.log(err))

  };

  return (
    <div className="App">
      <Section title='Tendencias' dataApi={section_1} />
      <Section title='Continuar Viendo' dataApi={section_2} />
    </div>
  );
}
export default App;
