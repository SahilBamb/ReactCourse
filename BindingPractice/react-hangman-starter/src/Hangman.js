import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import {randomWord} from './words.js';
import AlphaButtons from './AlphaButtons.js';

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    allLetters : "abcdefghijklmnopqrstuvwxyz",
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6],
    answer: randomWord(),
    maxGuesses : 10
  };

  constructor(props) {
    super(props);
    this.state = { nWrong: 0, guessed: new Set(), answer: this.props.answer };
    this.handleGuess = this.handleGuess.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  resetGame(){
    this.setState({ 
      nWrong: 0, 
      guessed: new Set(), 
      answer: randomWord() 
    });
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
      <button
        key={ltr} //made key the letter since it will not change (and is unique)
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} />

        {this.state.nWrong>0?<p>You have gotten {this.state.nWrong}/{this.props.maxGuesses} guesses wrong</p>:null}
        
        {this.state.nWrong!==this.props.maxGuesses?
          <div>
            <p className='Hangman-word'>{this.guessedWord()}</p>
            <p className='Hangman-btns'>{this.generateButtons()}</p>
          </div>
          :
          <div style={{color:"red"}}>
            <p>You Lose!</p>
            <p className='Hangman-word'>{this.props.answer}</p>
          </div>}
        <button id="longButton" onClick={this.resetGame} >Reset</button>
      </div>
    );
  }
}

export default Hangman;
