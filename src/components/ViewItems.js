import React, {Component} from "react";
import ViewItem from "./ViewItem.js";

export default class ViewItems extends Component {
  constructor( props ){
    super( props );
    this.state = { item: {} };
  }

  getItemById(id){
    fetch(`http://localhost:5000/Items/${id}`, { method: 'GET', mode: 'cors' })
      .then(response => response.json())
      .then(items => {
        let item = items[0];
        this.setState({item, id});
        console.log(this.state.item);
      })
      .catch(err => console.error(err));
  }

  componentDidMount(){
    this.getItemById(1);
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
