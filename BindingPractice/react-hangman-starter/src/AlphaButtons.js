import React, {Component} from 'react'


class AlphaButtons extends Component {
    static defaultProps = {
        allLetters : "abcdefghijklmnopqrstuvwxyz",
        guessed : new Set()
    }
    constructor(props){
        super(props);
        this.generateButtons = this.generateButtons.bind(this);
    }

    actionhandleguess(){
        this.handleguess()

    }

    generateButtons() {
        return this.props.allLetters.split("").map(ltr => (
          <button
            key={ltr} //made key the letter since it will not change (and is unique)
            value={ltr}
            onClick={this.handleguess}
            disabled={this.props.guessed.has(ltr)}
          >
            {ltr}
          </button>
        ));
      }


    render(){
        return(
            <div>{this.generateButtons()}</div>
        );
    }
}


export default AlphaButtons;