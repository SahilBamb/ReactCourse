function getNum(){
	return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
	render() {
		const temp = getNum();
		return (	
			<div>
				<h1>Your number is {temp}</h1>
				<p>{temp===7 ? 'Congrats!' : 'Unlucky!'}</p>
				{temp===7 ? <img src='https://media.giphy.com/media/a0h7sAqON67nO/giphy.gif'/> : null}
				{temp === 7 && <img src='https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif'/>}
			</div>
		)
	}
}