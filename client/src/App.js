import React from 'react';
import logo from './logo.svg';
import './App.css';
import Mavelmovies from './components/mavelmovies/Mavelmovies';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <Mavelmovies />
    </div>
  );
}

export default App;
