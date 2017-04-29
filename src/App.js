import React, { Component } from 'react';
import './App.css';
import ViewItem from './components/ViewItem.js';
import NewItem from './components/NewItem.js'

const item = { summary: 'Test item', description: 'This is the items description', user: 'KyleRHunt@Gmail.com', dueDate: '4/18/17' };


class App extends Component {
  // constructor(){
  //   super();
  //   this.getAllItems();
  // }

  getAllItems(){
    fetch(`http://localhost:5000/Items/`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(items => {
        this.setState({items});
      })
      .catch(err => console.error(err));
  }

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
          <ViewItem item={item} />
        </div>
        <div>
          <NewItem />
        </div>
      </div>
    );
  }
}

export default App;
