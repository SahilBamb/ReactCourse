import logo from './logo.svg';
import './App.css';
import Rando from './Rando.js';
import Button from './Button.js';
import BrokenClick from './BrokenClick.js';

function App() {
  return (
    <div className="App">
      {/* <Rando maxNum={7}/> */}
      <BrokenClick/>
    </div>
  );
}

export default App;