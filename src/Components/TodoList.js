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

  }


  render() {
   return (
      <div>
        <form className = "form-inline" onSubmit = { this.addTodo }>
          Task <input className = "form-control" type = "text" value={ this.state.task } onChange = { this.handleChangeTask }/>
           Details <input className = "form-control" type = "text" value= { this.state.details } onChange = { this.handleChangeDetails }/>
          <button className = "btn btn-primary" type = "submit">Add todo</button>
        </form>
        <div className="checkbox checkbox-inline">
          <input type="checkbox" id="inlineCheckbox1" value="option1"/>
            <label > Book </label>
        </div>
        <div className="checkbox checkbox-success checkbox-inline">
          <input type="checkbox" id="inlineCheckbox2" value="option1"/>
            <label> Sports </label>
        </div>
        <div className="checkbox checkbox-inline">
          <input type="checkbox" id="inlineCheckbox3" value="option1"/>
            <label> Music </label>
        </div>
      </div>
    );
  }

}

export default TodoList;

