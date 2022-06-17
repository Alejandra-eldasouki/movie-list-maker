import React from "react";

export default function MovieForm({
  setMovieFormName,
  movieFormName,
  setMovieFormYearReleased,
  movieFormYearReleased,
  movieFormDirector,
  setMovieFormDirector,
  setMovieFormColor,
  movieFormColor,
  submitMovie
}) {
  return (
    <div className="movie-form-container">
      <form onSubmit={submitMovie} className="movie-form">
        <label>
          Movie Name
          <input
            required
            onChange={(e) => setMovieFormName(e.target.value)}
            value={movieFormName}
          />
        </label>
        <label>
          Year Released
          <input
            required
            type="number"
            onChange={(e) => setMovieFormYearReleased(e.target.value)}
            value={movieFormYearReleased}
          />
        </label>
        <label>
          Director
          <input
            required
            onChange={(e) => setMovieFormDirector(e.target.value)}
            value={movieFormDirector}
          />
        </label>
        <label>
          Color
          <select
            required
            onChange={(e) => setMovieFormColor(e.target.value)}
            value={movieFormColor}
          >
            <option value="pink">Pink</option>
            <option value="lightgreen">lightgreen</option>
            <option value="yellow">yellow</option>
            <option value="lightblue">lightblue</option>
            <option value="red">red</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}