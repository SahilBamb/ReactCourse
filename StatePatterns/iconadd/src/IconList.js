import React,{Component} from 'react';
import logo from './logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, angry,faAnchor,archive, at, archway, baby, bell, bolt, bone, car, city, cloud, couch } from "@fortawesome/free-solid-svg-icons";

// import './IconList.css';

class IconList extends Component{

    static defaultProps = {
        options: [
            "😀",
            "🤨",
            "😞"
        ]
    }
    

    constructor(props){
        super(props);
        this.state = { icons: [] };
        this.addToList = this.addToList.bind(this);
    }

    addToList(){
        const newIcon = this.props.options[Math.floor((Math.random()*this.props.options.length))];
        const newList = this.state.icons;
        newList.push(newIcon);
        this.setState({icons:newList});
        // const newIcons = this.state.icons.map(prev => {
        //         return { ...prev, 'apple'};
        //     }
        // });
    }


  render(){
    // const icons = this.state.icons.map(ic => <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>);
    const url = "fa fa-" + 'angry';
    const icons = this.state.icons.map(ic => <i class={{ic}}></i>);

    return (
      <div className="IconList">
        <h1>
            
            {this.state.icons.map(m => <li>{m}</li>) }
            {this.state.icons.map(m => <i class={m}></i>) }
            
        </h1>
        <button onClick={this.addToList}>
            Add Icon
        </button>
      </div>
    );
  }
}

export default IconList;
