import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working </p>
        <Person name="Yudha" age="27" />
        <Person name="Rika" age="36"> My Hobbies: Racing</Person>
        <Person name="Zulfiqar" age="34"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Does this work now!!!'));
  }
}

export default App;
