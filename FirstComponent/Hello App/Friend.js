
class Friend extends React.Component {
    static defaultProps = {
        name: "UNKNOWN",
        hobbies: ['None'],

    };
    render() {
        const {name,hobbies} = this.props;
        return (
            <div>
                <h1>{name}</h1>
                <ul>
                    {hobbies.map(m=><li>{m}</li>)}
                </ul>
            </div>
        )
    }
}