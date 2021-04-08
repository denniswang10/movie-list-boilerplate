import React from 'react';
import MovieEntry from './movieEntry.jsx';

let MovieList = (props) => {
  return(
    <div className = "movie-list">
      <table>
        <thead>
          <tr><th><strong> Movie name</strong></th></tr>
        </thead>
        <tbody>
        {props.movies.map((movie, index) =>
          <MovieEntry key = {index} movie = {movie} />
        )}
        </tbody>
      </table>
    </div>
  )
}

export default MovieList;