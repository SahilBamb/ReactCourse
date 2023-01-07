import React, {Component} from 'react';
import Pokedex from './Pokedex';
import './Pokegame.css';

function getRandomPoke(pokemon){
    return pokemon[Math.floor(Math.random()*pokemon.length)];
}

function createTeam(numMons,pokemon){
    let team = [];
    for (let i=0; i<numMons;i++){
        team.push(getRandomPoke(pokemon));
    }
    return team;
}


class Pokegame extends Component {
    render(){
        const allPokemon = 
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

        const trainer1Team = createTeam(4,allPokemon);
        let trainer1Score = 0;
        for (let i=0; i<trainer1Team.length; i++){
            trainer1Score += trainer1Team[i].base_experience;
        }

        const trainer2Team = createTeam(4,allPokemon);
        let trainer2Score = 0;
        for (let i=0; i<trainer2Team.length; i++){
            trainer2Score += trainer2Team[i].base_experience;
        }

        const wins = (trainer1Score>trainer2Score)?"Trainer 1 Wins!":"Trainer 2 Wins!";

        return(
            <div className="Pokegame">
                <div className="trainerBox" style={(wins==="Trainer 1 Wins!")?{backgroundColor: 'lightgreen'}:null}>
                    <h1>Trainer 1</h1>
                    <img className="Pokegame-trainer" src="https://play.pokemonshowdown.com/sprites/trainers/ash-hoenn.png" />
                    <h2>Score: {trainer1Score}</h2>
                    <h2>Trainer 1's Pokemon</h2>
                    <Pokedex pokemon={trainer1Team} />
                </div>
                <div className="trainerBox" style={(wins!=="Trainer 1 Wins!")?{backgroundColor: 'lightgreen'}:null}>
                    <h1>Trainer 2</h1>
                    <img className="Pokegame-trainer" src="https://play.pokemonshowdown.com/sprites/trainers/misty-lgpe.png"/>
                    <h2>Score: {trainer2Score}</h2>
                    <h2>Trainer 2's Pokemon</h2>
                    <Pokedex pokemon={trainer2Team} />
                </div>
                <div className="WinningAlert">
                    <h1>{wins}</h1>
                </div>
            </div>
        );
    }
}

export default Pokegame;