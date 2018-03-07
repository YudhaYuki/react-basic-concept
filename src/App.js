import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Yudha', age: 27 },
      { name: 'Rika', age: 36 },
      { name: 'Zulfiqar', age: 34 }
    ],
    otherState: 'Some other value'
  }

  switchNamehandler = (newName) => {
    // console.log('Was clicked!');
    // DON't DO THIS this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: 'Yudha', age: 27 },
        { name: 'Rika', age: 36 },
        { name: 'Zulfiqar', age: 40 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Yudha', age: 27 },
        { name: event.target.value, age: 36 },
        { name: 'Zulfiqar', age: 40 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p> This is really working </p>
        <button onClick={() => this.switchNamehandler('YudhaYuki!!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age} 
          // Passing method using bind and anotherone above with YdhaYuki!!!
          click={this.switchNamehandler.bind(this, 'Yudhhhhha!')} 
          changed={this.nameChangedHandler} > My Hobbies: Racing </Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Does this work now!!!'));
  }
}

export default App;
