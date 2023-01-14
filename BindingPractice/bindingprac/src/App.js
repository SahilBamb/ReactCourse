import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AllButtons from './AllButtons.js'

class App extends Component{
  render() {
  return (
    <div className="App">
      <AllButtons/>
    </div>
  );
  }
}

export default App;