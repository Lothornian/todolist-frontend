import React, {Component} from "react";
import ViewItem from "./ViewItem.js";

export default class ViewItems extends Component {
  constructor( props ){
    super( props );
    this.state = { item: {} };
  }

  getAllIds(){
    fetch(`http://localhost:5000/Items/`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(items => {
        this.setState({items, id});
        console.log(this.state.items);
      })
      .catch(err => console.error(err));
  }

  componentDidMount(){
    this.getAllItems();
  }

  render(){
    return (
      <div>
        <p>{this.state.item.summary}</p>
        <ViewItem item={this.state.item} />
      </div>
    )
  }
}
