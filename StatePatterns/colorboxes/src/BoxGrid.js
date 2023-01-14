import React, {Component} from 'react';
import logo from './logo.svg';
import Box from './Box.js'

class BoxGrid extends Component{
  static defaultProps = {
    numBoxes : 12
  }
  render() {
   let allBoxes = [];
    for (let x = 0; x<this.props.numBoxes; x++){
      allBoxes.push(<Box/>);
    }
  return (
    <div className="BoxGrid">
      {allBoxes}
    </div>
  );
  }
}

export default BoxGrid;

