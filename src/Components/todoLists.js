import React, { Component } from 'react';
import ListItem from './listItem';

class TodoLists extends Component {

  constructor(props){
    super(props);
    this.state={
    todoLists:props.todoLists
    };
  this.addTodo =this.addTodo.bind(this);
  }

  addTodo(e){
    e.preventDefault();
    let task = this.refs.task.value;
    let details = this.refs.details.value;
    let id = Math.floor(Math.random()*100)+1;
    console.log(this.refs.task.value);
    this.setState({
      todoLists: this.state.todoLists.concat({id,task,details})
    });
    this.refs.task.value = "";
    this.refs.details.value = "";
  }


  render() {
    return (
      <div>
        <form onSubmit = {this.addTodo}>
          <input type="text" ref="task"/>
          <input type="text" ref="details"/>
          <button type="submit">Add todo</button>

        </form>
      <ul>
        {this.state.todoLists.map((todoList  =>{
          return (<ListItem todoList ={todoList} key={todoList.id} />)
        }))}
      </ul>
      </div>
    );
  }

}

export default TodoLists;
