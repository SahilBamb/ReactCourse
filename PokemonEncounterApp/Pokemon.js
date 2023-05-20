class Pokemon extends React.Component {
    static defaultProps = {
        poke: "pikachu",
    };
    render() {
        const firstFirstPart = "https://img.pokemondb.net/sprites/black-white/anim/"
        let firstSecondPart = "normal/"
        const shiny = Math.random();
        if ( shiny > 0.9) {firstSecondPart = "shiny/"}
        const first = firstFirstPart + firstSecondPart;
        const last = ".gif"
        const final = first + this.props.poke + last;
        return (<div>
                    <img src={final}/>
                    <p>A wild { (shiny > .9) ? "shiny" : "" } {this.props.poke} appeared!</p>
                </div>
        )
    }
}

ReactDOM.render(<Pokemon />, document.getElementById('root'))