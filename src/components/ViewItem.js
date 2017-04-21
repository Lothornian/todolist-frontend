import React, {Component} from "react";

export default class ViewItem extends Component {
  constructor( props ){
    super( props );
    this.state = { ...props.item };
    console.log( this.state );
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
