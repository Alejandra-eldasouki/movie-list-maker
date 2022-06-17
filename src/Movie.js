import React from 'react';

export default function Movie({ movie, handleDeleteMovie }) {
  return (
    <div
      className="movie"
      onClick={() => handleDeleteMovie && handleDeleteMovie(movie.name)}
      style={{ backgroundColor: movie.color }}
    >
      <h3>{movie.name}</h3>
      <p>Released in: {movie.year}</p>
      <p>Directed By: {movie.director}</p>
    </div>
  );
}
