import React, {Component} from 'react';
import logo from './logo.svg';
import './AllButtons.css';
import Button from './Button.js'

class BetterAllButtons extends Component {
    static defaultProps = {
        nums : [1,2,3,4,5]
    }

    constructor(props){
        super(props);
        this.state = {nums : this.props.nums};
        this.remove = this.remove.bind(this);
    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }));
    } 

    
    render() {
        return (
            <div className="AllButtons">
                { this.state.nums.map( 
                    c => 
                        <Button key={c} value={c} remove={this.remove} />
                        )
                }
            </div>
        );
    }
}

export default BetterAllButtons;