import React from 'react';
import Player from 'griffith';
import logo from './logo.svg';
import './App.css';
import video from './iron.mp4';

const sources = {
  sd: {
    play_url: video,
  },
}
  
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Player sources={sources} />
      </header>
    </div>
  );
}


export default App;
