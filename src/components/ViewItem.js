import React, {Component} from "react";

export default class ViewItem extends Component {
  constructor( props ){
    super( props );
    this.state = { item: {}, id: '1' };
  }

    getItemById(id){
      fetch(`http://localhost:5000/Items/${id}`, { method: 'GET', mode: 'cors' })
        .then(response => response.json())
        .then(items => {
          let item = items[0];
          this.setState({item, id});
        })
        .catch(err => console.error(err));
    }

    componentDidMount(){
      this.getItemById(1);
    }


  render(){
    return (
      <div>
        <h1>{this.state.item.summary}</h1>
        <p>Details: <br />
          {this.state.item.description}
        </p>
        <p>Created By: {this.state.item.user}</p>
        <p>Due Date: {this.state.item.dueDate}</p>
      </div>
    )
  }
}
