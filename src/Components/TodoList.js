import React, { Component } from 'react';

class TodoList extends Component {

  constructor (){
    super();
    this.state = {
        task: "",
        details: ""
    };
    this.addTodo = this.addTodo.bind( this );
    this.handleChangeTask = this.handleChangeTask.bind( this );
    this.handleChangeDetails = this.handleChangeDetails.bind( this );
  }

  handleChangeTask( e ){
    this.setState ({
        task: e.target.value,
        details: this.state.details

    });
  }
  handleChangeDetails( e ){
    this.setState ({
        task: this.state.task,
        details: e.target.value
    })
  }
  addTodo( e ){
    e.preventDefault();
    this.props.addTodo( {
      todoList: {
        'task': this.state.task,
        'details': this.state.details

      }
    });
    // this.setState({
    //     task: "",
    //     details: ""
    // })

  }


  render() {
   return (
      <div>
        <form onSubmit = { this.addTodo }>
          <input type = "text" value={ this.state.task } onChange = { this.handleChangeTask }/>
          <input type = "text" value= { this.state.details } onChange = { this.handleChangeDetails }/>
          <button type = "submit">Add todo</button>
        </form>
      </div>
    );
  }

}

export default TodoList;
