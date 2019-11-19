import React from 'react';
import './index.css';

import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Search extends React.Component {
  state = {
    bgImage: '',
    movies: [],
  }

  componentDidMount() {
    this.fetchbgMovie();
    this.fetchSearch();
  }

  async fetchbgMovie() {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=1752c8ea8ce111cf37e45818b0779d5f';
    const response = await fetch(url);
    const data = await response.json();
    /* Numero random de 1 a 19 para pegar imagem aleatória */
    const min = 1;
    const max = 19;
    const rand = min + Math.random() * (max - min);
    this.setState({ bgImage: data.results[parseInt(rand)].backdrop_path });
  }

  async fetchSearch() {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=1752c8ea8ce111cf37e45818b0779d5f&sort_by=popularity.desc&language=pt-BR&query=' + this.props.match.params.query;
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
    if (this.state.movies.length > 0) {
      return (
        <div className="App">
          <div className="top-left">
            <h4><a href='/'>VitaoFilmesHD</a></h4>
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
    } else {
      return (
        /* Nao foi possivel */
        <div className="App">
          <div style={{ backgroundSize: 'cover', filter: 'brightness(80%)', backgroundAttachment: 'fixed', backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${this.state.bgImage})` }} className="movieDetail">
            <div className="top-left">
              <h4><a href='/'>VitaoFilmesHD</a> - Nenhum filme encontrado</h4>
            </div>
          </div>
        </div>
      );
    }
  }

}

export default Search;
