class NumPicker extends React.Component {
    render() {

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        return <p> Random Number how {arr[Math.floor(Math.random() * arr.length)]} </p>
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'))