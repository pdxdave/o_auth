import React from 'react';
import './App.css';
import {Route} from 'react-router-dom'

import Home from './Home'
import Profile from './Profile'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
    </div>
  );
}

export default App;
