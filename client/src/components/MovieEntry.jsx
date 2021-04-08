import React from 'react';

let MovieEntry = (props) => {
  return(
    <tr>
      <td> {props.movie.title} </td>
    </tr>
  )
};

export default MovieEntry;