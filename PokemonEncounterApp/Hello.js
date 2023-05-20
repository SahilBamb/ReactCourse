class Hello extends React.Component {
    render() {
        console.log(this.props)
        return (<div>
                    <p> Hello {this.props.to} </p>
                    <p> From {this.props.from} </p>
                </div>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'))