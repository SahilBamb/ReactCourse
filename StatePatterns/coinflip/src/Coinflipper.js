import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Coinflipper extends Component{
    constructor(props){
        super(props);
        this.state = {total:0,numHeads:0,Heads:1};
        this.flipCoin = this.flipCoin.bind(this);
        this.incrementVal = this.incrementVal.bind(this);
    }

    incrementVal(num,incr){
        return num+incr;
    }

    flipCoin(){
        const flipResult = Math.floor(Math.random()*2);
        this.setState({
            Heads : flipResult,
            numHeads : this.incrementVal(this.state.numHeads,flipResult),
            total : this.incrementVal(this.state.total,1)
        });
    }

  render() {
    const numHeads = this.state.numHeads;
    const numTails = this.state.total - numHeads;
    const numTotal = this.state.total;
    return (
        <div className="Coinflipper">
            <h1>Let's flip a coin!</h1>
            {this.state.Heads?<img src="https://images.vexels.com/media/users/3/264569/isolated/lists/4bb56e7b0bbeb38727930f688fd1334b-quarter-illustration-head.png"></img>:
            <img src="https://images.vexels.com/media/users/3/264570/isolated/lists/14210011cda8a72ecf54ebf67b607dc5-quarter-dollar-illustration-tail.png"></img>}
            <button onClick={this.flipCoin}>Flip Me!</button>
            <p>Out of {numTotal} flips there have been {numHeads} heads and {numTails} tails</p>
        </div>
    );
  }
}

export default Coinflipper;
