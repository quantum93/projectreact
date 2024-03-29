import React, {useState} from 'react';
import Tweet from './tweet';


function App() {

  const [users] = useState([
    {name: 'Ed', message: 'Hello there'},
    {name: 'John', message: 'I am John Snow'},
    {name: 'traversy', message: 'Awesome React'}
  ]);

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );
}

export default App;
