import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Rules from './components/Rules';
import Game from './components/Game';


function App() {
  return (
    <div style={{ backgroundColor: '#2b2a28', height: '100vh' }}> 
      <Router>
        <Navbar />
        <Switch>
          <Route path="/play" component ={ Game } />
          <Route path="/rules" component ={ Rules } />
          <Route path="/" component ={ Landing } />

        </Switch>
    </Router>
    </div>);
}

export default App;
