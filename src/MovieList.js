
import Movie from './Movie';

export default function MovieList({ movies, handleDeleteMovie }) {
  return (
    <div className="movie-list-form">
      {movies.map((movie, i) => (
        <Movie key={movie.name + i} movie={movie} handleDeleteMovie={handleDeleteMovie} />
      ))}
    </div>
  );
}
