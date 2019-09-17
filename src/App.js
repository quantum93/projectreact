import React from 'react';
import Tweet from './tweet';
import './App.css';

function App() {

  return(
    <div className="app">
      <Tweet name='Dev Ed' message="This is a random tweet"/>
      <Tweet name='Ben'message="I am the true king"/>
      <Tweet name='Tae' message="This is a random tweet"/>
      <Tweet name='Josh' message="My new course is available"/>
      <Tweet name='Hugh' message="This is a random tweet"/>
    </div>
  );
}

export default App;
