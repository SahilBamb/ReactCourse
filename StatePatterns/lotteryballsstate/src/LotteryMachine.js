import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import LotteryBalls from './LotteryBalls.js';
import './LotteryMachine.css'
class LotteryMachine extends Component{
  
  static defaultProps = {
    title : "Lotto",
    numBalls : 6,
    maxVal : 40
  }

  constructor(props){
    super(props);
    this.state = {balls:[1,2,3,4,5,6]};
    this.getRandom = this.getRandom.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.randomizeBalls = this.randomizeBalls.bind(this);
  }

  getRandom(){
    return Math.floor(Math.random()*this.props.maxVal)+1;
  }

  randomizeBalls(){

    const newBalls = this.state.balls.map(ball => {
      return this.getRandom();
    });
  
    this.setState({
      balls: newBalls
    });
  
  }

  handleClick(){
    this.randomizeBalls();
  }

  render(){
    let ballsList = [];
    for(let x=0;x<this.props.numBalls;x++) 
    {
      ballsList.push(
      <div className='LotteryMachine-balls'>
        <LotteryBalls val={this.state.balls[x]}/>
      </div>
      )
    }
    return (
      <div className="LotteryMachine">
        <h3>{this.props.title}</h3>
        <div>{ballsList}</div>
        <button className='LotteryMachine-button' onClick={this.handleClick}>Generate</button>
      </div>
    );
  }
}

export default LotteryMachine;
