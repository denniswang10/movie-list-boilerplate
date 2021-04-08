import React from 'react';
import MovieList from './MovieList.jsx';
import dummy from './dummy.js';

console.log(dummy);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: dummy,
      searchMovie: '',
      addMovie: '',
      displayMovies: dummy
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name
    this.setState({
      [name]: value
    });
    // console.log('Printing out form id name', event.target.name);
  }

  handleSubmit(event) {
    if (this.state.searchMovie) {
      alert('A search was submitted: ' + this.state.searchMovie);
      event.preventDefault();
      let searchMovies = this.state.movies.slice();
      let re = new RegExp(this.state.searchMovie, 'i');
      searchMovies = searchMovies.filter(movie => movie.title.match(re));
      this.setState({displayMovies: searchMovies});
      this.state.searchMovies = '';
    } else {
      alert('An add was submitted: ' + this.state.addMovie);
      event.preventDefault();
      this.state.movies.push({title: this.state.addMovie});
      this.setState({displayMovies: this.state.movies});
      this.state.addMovie = '';
    }
  }

  render () {
    return (
      <div>
        <h1>Movie database!</h1>
        <form method = "post" className = "add-movie" onSubmit={this.handleSubmit}>
        <label>
            Add Movie:
            <input name="addMovie" type="text" value={this.state.addMovie}
            onChange = {this.handleChange}
            />
          </label>
          <input type = "submit" value = "Add" />
          </form>
        <form method = "post" className = "search-movie" onSubmit={this.handleSubmit}>
          <label>
            Movie:
            <input name="searchMovie" type="text" value={this.state.searchMovie}
            onChange = {this.handleChange}
            />
          </label>
          <input type = "submit" value = "Search" />
        </form>
      <MovieList movies = {this.state.displayMovies}/>
      </div>
    );
  }
}

export default App;