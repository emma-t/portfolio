import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">
      <div className="container">

        <Navbar />
        <Main />

      </div>
    </div>
  );
}

export default App;
