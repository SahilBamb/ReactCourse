import React,{Component} from 'react';
import Button from './Button';

function randNum(){
    return Math.floor(Math.random()*10)+1;
}

class SevenGame extends Component{

    constructor(props){
        super(props);
        this.state = { num: 1 };
        this.handleClick = this.handleClick.bind(this);
        this.playAgain = this.playAgain.bind(this);
    }

    handleClick(e){
        this.setState({num: randNum()});
    }

    playAgain(e){
        this.setState({num: 1});
    }

    render(){
        return (
            <div>
                <h1>Number is {this.state.num}</h1>
                {(this.state.num===7)?<h3>You Won!</h3>:<button onClick={this.handleClick}>Click Me!</button>}
                {(this.state.num===7)?<button onClick={this.playAgain}>Play Again?</button>:null}
            </div>);
    }
}

export default SevenGame;