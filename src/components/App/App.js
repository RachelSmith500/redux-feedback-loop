import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {

  render() {

    return (
      <Router>
          <div className="App">
              <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <h4><i>Don't forget it!</i></h4>
              </header>
            <br/>
          </div>
          <Route exact path="/feeling" component={Feeling}/>
      </Router>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return{
    reduxState
  }
}

export default connect(mapStateToProps)(App);
