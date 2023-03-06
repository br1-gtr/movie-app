import { useState, useEffect } from 'react';
import './App.css';
import { Section } from './components/Section';

function App() {

  const API_URL_3v = 'https://api.themoviedb.org/3';
  const API_URL_4v = 'https://api.themoviedb.org/4/list/10?page=1&api_key=';
  const API_URL_4v2 = 'https://api.themoviedb.org/4/list/10?page=2&api_key=';
  const API_URL_TRENDING = 'https://api.themoviedb.org/3/trending/movie/week?api_key=';
  const API_KEY = '2d1ea5bb9d0f92154b9db9cc98f6c371';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w200';

  const [dataApi, setDataApi] = useState([
    {
      section: 'Continuar Viendo',
      data: []
    },
    {
      section: 'Tendencias',
      data: []
    }
  ]);
  useEffect(() => {
    //fetchData(API_URL_4v, API_KEY, 'Continuar Viendo', setDataApi);
    //fetchData(API_URL_4v2, API_KEY, 'Tendencias', setDataApi);
  }, []);

  const fetchData = (url, key, section, setDataState) => {
    fetch(`${url}${key}`)
      .then(res => res.json())
      .then(data => {
        const newData = dataApi.map(item => {
          if (item.section === section) {
            return {
              ...item,
              data: data.results
            }
          } else {
            return { ...item };
          }

        })
        setDataState(newData)
      })
      .catch(err => console.log(err))
  }
  return (
    <div className="App">
      {console.log(dataApi[0])}
      {console.log(dataApi[1])}
      <Section title='Continuar Viendo' dataApi={dataApi[0]} />
      <Section title='Tendencias' dataApi={dataApi[1]} />
      <button onClick={() => { fetchData(API_URL_4v, API_KEY, 'Continuar Viendo', setDataApi); }}>RES 01</button>
      <button onClick={() => { fetchData(API_URL_4v2, API_KEY, 'Tendencias', setDataApi); }}>RES 02</button>
    </div>
  );
}
export default App;
