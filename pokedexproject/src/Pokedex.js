import React,{Component} from 'react';
import Pokecard from './Pokecard';

class Pokedex extends Component{
    render(){
        const Pokemon = this.props.pokemon;
        return (
            <div className="Pokedex">
                {Pokemon.map(poke => <Pokecard name={poke.name} type={poke.type} exp={poke.base_experience} img={poke.img}/>)}
            </div>
        );
    }
}

export default Pokedex;