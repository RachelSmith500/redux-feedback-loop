import React, { Component } from 'react';
// import { connect } from 'react-redux';
import './App.css';
import Feeling from './../Feeling/Feeling';
import Understanding from './../Understanding/Understanding';
import Support from './../Support/Support';
import Comments from './../Comments/Comments';
import Review from './../Review/Review';
import ThankYou from './../ThankYou/ThankYou';


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
            
              <div><Link to="/feeling">Home</Link></div>
           
              <Route exact path="/feeling" component={Feeling}/>
              <Route path="/understanding" component={Understanding}/>
              <Route path="/support" component={Support}/>
              <Route path="/comments" component={Comments}/>
              <Route path="/review" component={Review}/>
              <Route path="/thankyou" component={ThankYou}/>
          </div>
      </Router>
    );
  }
}


export default(App);
