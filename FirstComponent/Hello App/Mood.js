function getMood(){
	const moods = [ 'Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
	return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello there!</h1>
				<h1> My Current Mood is: {getMood()} </h1>
				<img src="https://www.allabtai.com/wp-content/uploads/2022/08/darth-vader-midjourney.jpg" />
			</div>
		);
	}
}
