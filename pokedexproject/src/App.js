import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PokeDisplay from './PokeDisplay';
import Pokegame from './Pokegame';

class App extends Component {
  render(){
    return (
      <div><PokeDisplay/></div>
      //<div><Pokegame/></div>
    );
  }
}

export default App;
