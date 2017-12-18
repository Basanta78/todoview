import React, { Component } from 'react';
import ListItem from './listItem';

class TodoList extends Component {

  constructor (){
    super();
    this.state = {
      todoList: {
        task: "",
        details: ""
      }
    };
    this.addTodo = this.addTodo.bind( this );
    this.handleChangeTask = this.handleChangeTask.bind( this );
    this.handleChangeDetails = this.handleChangeDetails.bind( this );
  }

  handleChangeTask( e ){
    this.setState ({
      todoList: {
        task: e.target.value,
        details: this.state.todoList.details
      }
    });
  }
  handleChangeDetails( e ){
    this.setState ({
      todoList: {
        task: this.state.todoList.task,
        details: e.target.value
      }

    })
  }
  addTodo( e ){
    e.preventDefault();
    this.props.addTodo({
      todoList: this.state.todoList
    })

  }


  render() {
   return (
      <div>
        <form onSubmit = { this.addTodo }>
          <input type = "text" value={ this.state.todoList.task } onChange = { this.handleChangeTask }/>
          <input type = "text" value= { this.state.todoList.details } onChange = { this.handleChangeDetails }/>
          <button type = "submit">Add todo</button>
        </form>
      </div>
    );
  }

}

export default TodoList;
