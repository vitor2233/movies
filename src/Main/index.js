import React from 'react';
import './index.css';

import { InputGroup, FormControl, Button } from "react-bootstrap";
import InfiniteCarousel from 'react-leaf-carousel';

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
    this.setState({ genres: data.genres })
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
          <InfiniteCarousel
            breakpoints={[
              {
                breakpoint: 500,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                },
              },
            ]}
            showSides={true}
            sidesOpacity={.5}
            sideSize={.1}
            slidesToScroll={4}
            slidesToShow={4}
            scrollOnDevice={false}
          >
            <div>
              <h6>Ação</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280/dJnXQL6Aa4s26eaORTvy0zRskfh.jpg'
              />
            </div>
            <div>
              <h6>Aventura</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//devZdyPRXMiN8HHiX7Y8s0LLEee.jpg'
              />
            </div>
            <div>
              <h6>Animação</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//pZC8Rc6t8vEUow28GLJaSYq4Blr.jpg'
              />
            </div>
            <div>
              <h6>Comédia</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//foEOVg4HQl2VzKzTh27CAHmXyg.jpg'
              />
            </div>
            <div>
              <h6>Crime</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//ylt62ORXZxcRePzZuI0xwJ6ERup.jpg'
              />
            </div>
            <div>
              <h6>Documentário</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//cX3fl80NMXILgmsy0blU9ir6sy1.jpg'
              />
            </div>
            <div>
              <h6>Drama</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//2YMTXZP7wExlJS5dBdTWoHO5wm3.jpg'
              />
            </div>
            <div>
              <h6>Terror</h6>
              <img
                alt='Terror'
                src='https://image.tmdb.org/t/p/w1280//hufyXxsAqgWvWZp2lq2wZPsS4sf.jpg'
              />
            </div>
            <div>
              <h6>Música</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//1rjaRIAqFPQNnMtqSMLtg0VEABi.jpg'
              />
            </div>
            <div>
              <h6>Romance</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//5o8iX7Vi2fbDjqCXeGU25LKGtti.jpg'
              />
            </div>
            <div>
              <h6>Ficção científica</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//rkHe0BfOo1f5N2q6rxgdYac7Zf6.jpg'
              />
            </div>
            <div>
              <h6>Guerra</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//7iVdjPGTWQ3PcEE6faZSoIAOPvX.jpg'
              />
            </div>
            <div>
              <h6>Faroeste</h6>
              <img
                alt=''
                src='https://image.tmdb.org/t/p/w1280//aKlksK9ZfL4OCI66H9i4dB7zZhc.jpg'
              />
            </div>
          </InfiniteCarousel>
        </div>
      </div>
    );
  }

}

export default Main;
