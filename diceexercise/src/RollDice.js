import logo from './logo.svg';
import './RollDice.css';
import React,{Component} from 'react';
import Die from './Die';

class RollDice extends Component{
    static defaultProps = {
        numToStr : ['zero','one','two','three','four','five','six']
    };

    constructor(props){
        super(props);
        this.state = {DieOne:'one',DieTwo:'one'};
        this.roll = this.roll.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    roll(){
        const DieoneVal = this.props.numToStr[Math.floor(Math.random()*6)+1];
        const DietwoVal = this.props.numToStr[Math.floor(Math.random()*6)+1];
        this.setState({DieOne:DieoneVal, DieTwo:DietwoVal});
        // setTimeout(() => {
        //     this.setState({ rolling: false });
        //   }, 1000);
    }

    handleClick(){

    }

    render(){
        console.log(this.state.DieOne);
        console.log(this.state.DieTwo);
        return (
        <div className="RollDice">
            <Die dieVal={this.state.DieOne}/>
            <Die dieVal={this.state.DieTwo}/>
            <button onClick={this.roll}>Roll Dice!</button> 
        </div>
        );
    }
}

export default RollDice;