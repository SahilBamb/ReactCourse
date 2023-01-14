import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LotteryMachine from './LotteryMachine.js';

class App extends Component{
  render(){
    return (
      <div className="App">
        <LotteryMachine/>
        <LotteryMachine title="Quick Daily" numBalls={4} maxVal={10} />
      </div>
    );
  }
}

export default App;
