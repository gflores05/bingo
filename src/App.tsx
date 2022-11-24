import React from 'react';
import logo from './logo.svg';
import './App.css';
import BingoTable from './views/BingoTable';

function App() {
  return (
    <div className="container">
      <header className="w-100 text-center">
        <h1>Bingo!</h1>
        <h2>JMJ 2023 - Parroquia Nuestra Se&ntilde;ora de la Altagracia</h2>
      </header>
      <BingoTable/>
    </div>
  );
}

export default App;
