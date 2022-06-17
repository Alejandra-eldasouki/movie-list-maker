import './App.css';
import { useState, useEffect } from 'react';
import Movie from './Movie';
import MovieForm from './MovieForm';

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
      <div className="current-movie-quarter">
        <Movie
          movie={{
            name: movieFormName,
            year: movieFromYearReleased,
            color: movieFormColor,
            director: movieFormDirector,
          }}
        />
      </div>
      <div className="movie-filter">
        Filter Movies
        <input onChange={(e) => setFilterQuery(e.target.value)} />
      </div>
      <MovieForm
        setMovieFormName={setMovieFormName}
        movieFormName={movieFormName}
        setMovieFormYearReleased={setMovieFromYearReleased}
        movieFormYearReleased={movieFromYearReleased}
        setMovieFormColor={setMovieFormColor}
        movieFormColor={movieFormColor}
        setMovieFormDirector={setMovieFormDirector}
        movieFormDirector={movieFormDirector}
        submitMovie={submitMovie}
      />
    </div>
  );
}

export default App;
