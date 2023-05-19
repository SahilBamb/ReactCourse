import React,{Component} from 'react';
import logo from './logo.svg';
// import './GridGame.css';

class GridGame extends Component {
    static defaultProps = {
      rows = 3;
      cols = 3;

    }
    constructor(props){
        super(props);
        this.state[ 'gameboard' = [
                                    [[0] * this.props.cols] * this.props.rows
                                  ]
                              
                                  ];
                  
              
    }
  render(){
  return (
    <div>
      {this.state['gameboard'].map(m=> )}
    </div>
    
  );
  }
}

export default GridGame;
