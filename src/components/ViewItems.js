import React, {Component} from "react";

export default class ViewItem extends Component {
  constructor( props ){
    super( props );
    this.state = { item: {} };
  }

  getAllItems(){
    console.log("test");
    fetch('http://localhost:5000/Items/', { method: 'GET', mode: 'cors' })
      .then(response => this.setState(response.json()))
      .then(item => {
        this.setState({item})
        console.log(item);
      })
      .catch(err => console.error(err));
  }

  componentDidMount(){
    this.getAllItems();
  }

  render(){
    return (
      <div>
        <h1>{this.state.summary}</h1>
        <p>Details: <br />
          {this.state.description}
        </p>
        <p>Created By: {this.state.user}</p>
        <p>Due Date: {this.state.dueDate}</p>
      </div>
    )
  }
}
