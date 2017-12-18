import React, { Component } from 'react';
import SearchField from "./searchField";
import TodoList from './TodoList';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8848/api/users/1/';

class MainWrapper extends Component {

  constructor () {
    super ();
    this.state = {
      todoList: []
    }
  }
  componentDidMount () {
    axios.get( `todo` )
      .then( res => {
        this.setState( { todoList: res.data.data.Todos } );
      });
  }

  addTodo( todo ) {
    axios.post( 'todo', {
      "task": todo.todoList.task,
      "details": todo.todoList.details
    })
      .then( function ( response ) {
        console.log( response );
      })
      .catch( function ( error ) {
        console.log( error );
      });
    //apicall
  }

  changeState( state ) {
    this.setState( {
      todoList: state
    })
  }

  render() {
    return (
        <div className = "mainWrapper">
          <TodoList addTodo = { this.addTodo } editTodo = { this.addTodo } changeState={ this.changeState } todoList = { this.state.todoList }/>
          <SearchField todoLists = { this.state.todoList }/>
      </div>
    );
  }
}

export default MainWrapper;
