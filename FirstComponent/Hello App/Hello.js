class Hello extends React.Component {
	render(){
        console.log(this.props);
        let bangs = "!".repeat(this.props.bangs);
		return (
			<div>
				<h1>Hi {this.props.to}</h1>
				<h1>From {this.props.from}{bangs}</h1>
                <img src={this.props.img}/>
			</div>
		);
	}

}