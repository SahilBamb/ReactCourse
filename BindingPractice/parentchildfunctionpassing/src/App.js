import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AllButtons from './AllButtons.js'
import BetterAllButtons from './BetterAllButtons.js'

class App extends Component{
  render() {
  return (
    <div className="App">
      <h1>Old Version</h1>
      <AllButtons/>
      <h1>Better Version</h1>
      <BetterAllButtons/>
    </div>
  );
  }
}

export default App;