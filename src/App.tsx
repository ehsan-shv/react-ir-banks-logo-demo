import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import BankIcon from './components/BankIcon/BankIcon';

function App() {
  const [digits, setDigits] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={digits} onChange={(e) => setDigits(e.target.value)} />
        <BankIcon digits={digits} onFindBankName={(name) => console.log(name)} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
