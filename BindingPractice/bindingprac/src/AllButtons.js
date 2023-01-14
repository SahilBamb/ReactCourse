import React, {Component} from 'react';
import logo from './logo.svg';
import './AllButtons.css';
import Button from './Button.js'

class AllButtons extends Component{
    static defaultProps = {
        color : "cyan",
        colorsList : ["cyan","indigo","orangered","teal"]
    }
    constructor(props){
        super(props);
        this.state = {color : this.props.color};
        this.handleClick = this.handleClick.bind(this);
    }
        

    handleClick(c){
        this.setState({color : c});
    }
    
    render() {
        return (
            <div className="AllButtons" style={{backgroundColor: this.state.color}}>
                { this.props.colorsList.map( 
                    c => 
                    <button onClick={this.handleClick.bind(this, c)} className="AllButtons-button" style={{backgroundColor: c}}> {c} </button> 
                    )
                }
            </div>
        );
    }
}

export default AllButtons;