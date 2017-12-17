import React, { Component } from 'react';

class ListItem extends Component {

  render() {
    return (
      <li>{this.props.todoList.task}-{this.props.todoList.details} </li>
    );
  }
}

export default ListItem;
