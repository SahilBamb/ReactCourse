import logo from './logo.svg';
import './Die.css';
import React,{Component} from 'react';



class Die extends Component{

    constructor(props){
        super(props);
        this.state = {dieVal:this.props.dieVal};
    }

    render(){
        const url = "fas fa-dice-" + this.state.dieVal;
        return (
            <div className="Die">
                <i className={url}></i>
            </div>
        );
    }
}

export default Die;
