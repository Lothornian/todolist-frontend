import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ViewItems from './components/ViewItems.js';

const item = { summary: 'Test item', description: 'This is the items description', user: 'KyleRHunt@Gmail.com', dueDate: '4/18/17' };

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Kyles To Do List!</h2>
        </div>
        <p className="App-intro">
          View your to do items below.
        </p>
        <div className="Item">
          <ViewItems item={item} />
        </div>
      </div>
    );
  }
}

export default App;
