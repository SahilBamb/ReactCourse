import React,{Component} from 'react';
import './App.css';
import Pokedex from './Pokedex';

class PokeDisplay extends Component {
  render(){
    const Pokemon = 
        [
            {id: 4, name: 'charmander', type: 'fire', base_experience: 62, img: 'Charmander.jpg'},
            {id: 7, name: 'squirtle', type: 'water', base_experience: 63, img: 'Squirtle.jpg'},
            {id: 11, name: 'metapod', type: 'bug', base_experience: 72, img: 'Metapod.jpg'},
            {id: 12, name: 'butterfree', type: 'flying', base_experience: 178, img: 'Butterfree.jpg'},
            {id: 25, name: 'pikachu', type: 'electric', base_experience: 112, img: 'Pikachu.jpg'},
            {id: 39, name: 'jigglypuff', type: 'normal', base_experience: 95, img: 'Jigglypuff.jpg'},
            {id: 94, name: 'gengar', type: 'poison', base_experience: 225, img: 'Gengar.jpg'},
            {id: 133, name: 'eevee', type: 'normal', base_experience: 65, img: 'Eevee.jpg'}
          ]
    return (
      <div><Pokedex pokemon={Pokemon}/></div>
    );
  }
}

export default PokeDisplay;
