class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Slot Machine!</h1>
                <SlotMachine/>
                <SlotMachine/>
                <SlotMachine/>
            </div>
        );
    }
}


ReactDOM.render(<App/>,document.getElementById('root'));