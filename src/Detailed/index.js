import React from 'react';
import './index.css';

import ProgressButton from 'react-progress-button';

class Detailed extends React.Component {
  state = {
    bgImage: '',
    movie: [],

  }

  componentDidMount() {
    this.fetchMovie();
  }

  async fetchMovie() {
    const url = 'https://api.themoviedb.org/3/movie/' + this.props.match.params.id + '?api_key=1752c8ea8ce111cf37e45818b0779d5f&language=pt-BR';
    const response = await fetch(url);
    const data = await response.json();

    this.setState({ movie: data, bgImage: data.backdrop_path });
  }



  render() {
    return (
      <div className="Detailed">
        <div className="movieDetail" style={{backgroundSize: 'cover', filter: 'brightness(80%)', backgroundAttachment: 'fixed', backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${this.state.bgImage})` }}>
          <div className="top-left">
            <h4><a href='/'>VitaoFilmesHD</a></h4>
          </div>
          <div className="detailedMovie">
            <h2>{this.state.movie.title}</h2>
            <h4>{this.state.movie.tagline}</h4>
            <p>{this.state.movie.overview}</p>
            <ProgressButton>
              Assistir
            </ProgressButton>
          </div>

        </div>
      </div>
    );
  }

}

export default Detailed;
