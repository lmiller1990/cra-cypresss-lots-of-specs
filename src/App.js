import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [c, setC] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setC(c => c + 1)}>Increment</button>
      <p>Count is {c}</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
