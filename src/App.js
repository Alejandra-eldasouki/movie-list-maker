import './App.css';
import { useState, useEffect } from 'react';


function App() {

  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setAllFilteredMovies] = useState([]);
  const [movieFormName, setMovieFormName] = useState([]);
  const [movieFromYearReleased, setMovieFromYearReleased] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('lightgreen');
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => handleFilterMovies(filterQuery), [allMovies, filterQuery]);

  function submitMovie(e) {
    e.preventDefault();
    const newMovie = {
      name: movieFormName,
      year: movieFromYearReleased,
      color: movieFormColor,
      director: movieFormDirector,
    };
    setAllMovies([...allMovies, newMovie]);

    setMovieFormName('');
    setMovieFromYearReleased('');
    setMovieFormDirector('');
    setMovieFormColor('');
  }

  function handleDeleteMovie(name) {
    const movieIndex = allMovies.findIndex((movie) => movie.name === name);

    allMovies.splice(movieIndex, 1);

    setAllMovies([...allMovies]);
  }

  function handleFilterMovies(search) {
    const searchMovies = allMovies.filter((movie) => movie.name.includes(search));

    search ? setAllFilteredMovies(searchMovies) : setAllFilteredMovies(allMovies);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
