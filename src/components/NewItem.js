import React, { Component } from "react";

export default class NewItem extends Component {
  constructor( props ){
    super( props );
    this.state = { item: {}, id: '1' };
  }

  createItem = item => {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    fetch(`http://localhost:5000/Items/`, {
      method: 'post',
      mode: 'cors',
      body: JSON.stringify(item),
      headers: myHeaders
    })
      .catch(err => console.error(err));
  }

  componentDidMount(){
  }

  handleSubmit = e => {
    e.preventDefault();
    let item = {}
    item.id= "4321";
    item.summary= this.state.summary;
    item.description= this.state.description;
    item.dueDate= this.state.dueDate;
    item.user= this.state.user;
    this.createItem(item);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit} method="post" name="form">
          <div>
            <label htmlFor="Summary">Title</label>
            <input
              type="text"
              id="summary"
              name="Summary"
              onChange={ e => this.setState({ summary: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="Long_Description">Description</label>
            <textarea
              id="description"
              name="Long_Description"
              onChange={ e => this.setState({ description: e.target.value })}
            ></textarea>
          </div>
          <div>
            <label htmlFor="Due_Date">Due Date</label>
            <input
              type="Date"
              id="dueDate"
              name="Due_Date"
              onChange={ e => this.setState({ dueDate: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="Email">Email Address</label>
            <input
              type="email"
              id="user"
              name="Email"
              onChange={ e => this.setState({ user: e.target.value})}
            />
          </div>
          <div className="button">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    )
  }
}
