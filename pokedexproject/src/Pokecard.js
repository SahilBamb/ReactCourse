import React,{Component} from 'react';
import './Pokecard.css'

class Pokecard extends Component{
    render(){
        let {name, type, exp, img} = this.props;
        const imgUrl = "https://img.pokemondb.net/sprites/black-white/normal/" + name + ".png";
        return (
            <div className="Pokecard">
                <div className="Pokecard-Details">
                    <h3 className="Pokecard-Text">{name}</h3>
                    <img className="Pokecard-Sprite" src={imgUrl} alt="{name}"/>
                    <p className="Pokecard-Text">Type: {type}</p>
                    <p>EXP: {exp}</p>
                </div>
            </div>
        );
    }
}

export default Pokecard;