import React, {Component} from 'react';
import logo from './logo.svg';
import './AllButtons.css';
import Button from './Button.js'

class AllButtons extends Component {
    static defaultProps = {
        nums : [1,2,3,4,5]
    }

    constructor(props){
        super(props);
        this.state = {nums : this.props.nums};
        this.handleClick = this.handleClick.bind(this);
    }

    remove(num) {
        this.setState(st => ({
            nums: st.nums.filter(n => n !== num)
        }));
    } 

    handleClick(c){
        this.setState({color : c});
    }
    
    render() {
        return (
            <div className="AllButtons">
                { this.state.nums.map( 
                    c => 
                        <Button value={c} remove={() => this.remove(c)} />
                        )
                }
            </div>
        );
    }
}

export default AllButtons;