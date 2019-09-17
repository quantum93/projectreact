import React from 'react';

function Hello () {

  const sayHello = () => {console.log("hello");}
  // const counter = 0;

  return(
    <div>
      <h1>Hello React</h1>
      <h3>This is hello component</h3>
      <button onClick={sayHello}>Say Hello</button>
    </div>
  )
}

export default Hello;
