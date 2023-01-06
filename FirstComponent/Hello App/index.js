class App extends React.Component {
	render(){
		return (
			<div>
				<Friend 
					name="Elton"
					hobbies={['Piano','Singing','Dancing']}
				/>
				<Friend 
					name="Frieda"
					hobbies={['Painting','Hunting','Woodworking']}
				/>
				<Friend
				
				/>
			</div>
		);
	}
}

//Rendering component into div with ID of "root"
//Telling it "what" to render and "where" to render
// ReactDOM.render(<Hello/>, document.getElementById('root'));
// ReactDOM.render(<JSXDemo/>, document.getElementById('root'));
// ReactDOM.render(<NumPicker/>, document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));