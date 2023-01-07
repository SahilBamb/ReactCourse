import React, {Component} from 'react';
import "./Dog.css"
import dogimg from './dog.jpg';


class Dog extends Component{
    render(){
        return (
        <div className="Dog">
            <h1>DOG!</h1>
            <img className="Dog-img" src={dogimg} alt="cute puppy!"></img>
        </div>
        );
    }
}

export default Dog;