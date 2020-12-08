import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Rules from './components/Rules';
import OnePlayer from './components/OnePlayer';


function App() {
  return (
    <div style={{ backgroundColor: '#2b2a28', height: '100vh' }}> 
      <Router>
        <Switch>
          <Route path="/onePlayer" component ={ OnePlayer } />
          <Route path="/rules" component ={ Rules } />
          <Route path="/" component ={ Landing } />

        </Switch>
    </Router>
    </div>);
}

export default App;