import React from 'react';
import './App.css';
import Main from './Main';
import Movies from './Movies';
import Detailed from './Detailed';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App(){
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Main} />
          <Route exact path="/movies/:genre" component={Movies} />
          <Route exact path="/movie/:id" component={Detailed} />
        </Router>
      </div>
    );

}

export default App;
