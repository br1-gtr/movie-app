import { useState, useEffect } from 'react';
import './App.css';

//const APY_KEY = api_key=2d1ea5bb9d0f92154b9db9cc98f6c371
function App() {

  const [dataApi, setDataApi] = useState('');

  useEffect(() => {
    const API_KEY = '2d1ea5bb9d0f92154b9db9cc98f6c371';
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=5&with_watch_monetization_types=flatrate`)
      .then(res => res.json())
      .then(data => console.log(data))
  }, []);
  return (
    <div className="App">

    </div>
  );
}

export default App;
