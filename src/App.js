import React from 'react';
import './App.css';
import Main from './Main';
import Movies from './Movies';
import Detailed from './Detailed';
import Search from './Search';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(){
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Main} />
          <Route path="/movies/:genre" component={Movies} />
          <Route path="/movie/:id" component={Detailed} />
          <Route path="/search/:query" component={Search} />
        </Router>
      </div>
    );

}

export default App;
