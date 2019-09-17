import React from 'react';
import Tweet from './tweet';
import './App.css';

function App() {

  return(
    <div className="app">
      <Tweet name='Dev Ed'/>
      <Tweet name='Ben'/>
      <Tweet name='Tae'/>
      <Tweet name='Josh'/>
      <Tweet name='Hugh'/>
    </div>
  );
}

export default App;
