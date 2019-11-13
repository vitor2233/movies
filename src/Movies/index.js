import React from 'react';
import './index.css';

import { Card } from 'react-bootstrap';

class Movies extends React.Component {
  state = {
    movies: [],
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=1752c8ea8ce111cf37e45818b0779d5f&language=pt-BR&page=1&whithout_genres=animation';
    const response = await fetch(url);
    const data = await response.json();
    /* Tirar os filmes japoneses */
    const result = data.results.filter(x => x.original_language !== 'ja');
    this.setState({ movies: result })
  }

  render() {
    return (
      <div className="App">
        <div className="movies">
          {console.log(this.state.movies)}
          {this.state.movies.map(movie => (
            <div key={movie.id} className="movie">
              <Card>
                <Card.Img className="imgPoster" src={'https://image.tmdb.org/t/p/w1280/' + movie.poster_path} />
                <Card.Body className="movieDescription">
                  <Card.Title className="movieTitle">{movie.title}</Card.Title>
                  <Card.Title className="movieRating">{movie.vote_average} </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default Movies;
