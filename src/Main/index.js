import React from 'react';
import './index.css';

import { InputGroup, FormControl, Button } from "react-bootstrap";

class Main extends React.Component {
  state = {
    bgImage: '',
    genres: [],
  }

  componentDidMount() {
    this.fetchbgMovie();
    this.fetchGenres();
  }

  async fetchGenres() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=1752c8ea8ce111cf37e45818b0779d5f&language=pt-BR';
    const response = await fetch(url);
    const data = await response.json();
    this.setState({genres: data})
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

  render() {
    return (
      <div className="App">
        <div className="search">
          <img src={'https://image.tmdb.org/t/p/w1280/' + this.state.bgImage} alt="" />
          <div className="top-left">
            <h4>VitaoFilmesHD</h4>
          </div>
          <div className="top-right">
            <InputGroup className="iptMovie">
              <FormControl
                placeholder="Procure por filmes ou séries"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button className="btnSearch" variant="outline-secondary">Pesquisar</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>

        <div className="genres">
          <div className="action">
            <h6>Ação</h6>
            {/* Foto com filme de ação */}
          </div>
        </div>
      </div>
    );
  }

}

export default Main;
