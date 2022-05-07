import React, { useState } from 'react';
import './App.css';
import { BankIcon } from 'react-ir-banks-logo';

function App() {
  const [digits, setDigits] = useState('');
  const [name, setName] = useState('');
  return (
    <div className="App">
      <header className="App-header">
        <label>شماره کارت:</label>
        <input type="text" value={digits} onChange={(e) => setDigits(e.target.value)} />
        <BankIcon digits={digits} size="200px" margin="100px" onFindBankName={(name: string) => setName(name)} />
        <h1>{name}</h1>
      </header>
    </div>
  );
}

export default App;
