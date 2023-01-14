import React,{Component} from 'react';

class ScoreKeeper extends Component {

	constructor(props){
		super(props);
		this.state = {score : 0};
		this.incrementScore = this.incrementScore.bind(this);
        this.wrongUpdate = this.wrongUpdate.bind(this);
		this.correctUpdate = this.correctUpdate.bind(this);
        this.alsoCorrectUpdate = this.alsoCorrectUpdate.bind(this);
	}

	wrongUpdate() {
		this.setState({ score: this.state.score + 1 });
        this.setState({ score: this.state.score + 1 });
        this.setState({ score: this.state.score + 1 });
	}

	//getState Callback Form
	correctUpdate() {
		this.setState(st => {
			return { score: st.score + 1 };
		});
		this.setState(st => {
			return { score: st.score + 1 };
		});
		this.setState(st => {
			return { score: st.score + 1 };
		});
    }

    incrementScore(curState) {
        return { score: curState.score + 1 };
    }

    //getState Callback Form
	alsoCorrectUpdate() {
		this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    }

	render() {
		return (
			<div>
                <i class="fa-solid fa-thumbs-up fa-5x"></i>
                <h1>{this.state.score}</h1>
				<button onClick={this.wrongUpdate}>Wrong+3</button>
                <button onClick={this.correctUpdate}>Correct+3</button>
                <button onClick={this.alsoCorrectUpdate}>Also Correct+3</button>
			</div>
        );
	}
}

export default ScoreKeeper;