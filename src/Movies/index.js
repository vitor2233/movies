import React from 'react';
import './index.css';

import { MdSkipNext } from 'react-icons/md';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Movies extends React.Component {
  state = {
    movies: [],
    page: 1,
  }

  increasePage(p) {
    this.setState(prevState => {
      return {page: prevState.page + 1}
    });
    this.fetchMovies();
  }

  componentDidMount() {
    this.fetchMovies();
  }

  async fetchMovies() {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=1752c8ea8ce111cf37e45818b0779d5f&language=pt-BR&page='+this.state.page+'&whithout_genres=animation&with_genres=' + this.props.match.params.genre;
    const response = await fetch(url);
    const data = await response.json();
    /* Tirar os filmes japoneses */
    const result = data.results.filter(x =>
      x.original_language !== 'ja' &&
      x.original_language !== 'ko'
    );

    this.setState({ movies: result })
  }

  render() {
    return (
      <div className="App">
        <div className="top-left">
          <h4><a href='/'>VitaoFilmesHD</a></h4>
        </div>
        <div className="top-right">
          <Button variant="link" value='Inc' onClick={this.increasePage.bind(this)}> <MdSkipNext/> </Button>
        </div>
        <div className="movies">
          {this.state.movies.map(movie => (
            <div key={movie.id} className="movie">
              <Link to={"/movie/" + movie.id}>
                <Card onClick={() => console.log(movie.id)}>
                  <Card.Img className="imgPoster" src={'https://image.tmdb.org/t/p/w1280/' + movie.poster_path} />
                  <Card.Body className="movieDescription">
                    <Card.Title className="movieTitle">{movie.title}</Card.Title>
                    <Card.Title className="movieRating">{movie.vote_average} </Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

}

export default Movies;
