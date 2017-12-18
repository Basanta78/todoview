import React, { Component } from 'react';

class ListItem extends Component {

  constructor (props) {
    super(props);
    this.state={
      todoList:props.todoList,
      editing :false
    };

  this.deleteList = this.deleteList.bind(this);
  this.edit = this.edit.bind(this);
  this.editList = this.editList.bind(this);
  this.saveList = this.saveList.bind(this);
  this.editTask = this.editTask.bind(this);
  this.editDetails = this.editDetails.bind(this);

  }

  edit(event){
    event.preventDefault();
    this.setState({
      editing: true
    });
  }

  editList(){
    return(
      <div>
        <input type="text" value={this.state.todoList.task} ref="task" onChange={this.editTask}/>
        <input type="text" value={this.state.todoList.details} ref="details" onChange={this.editDetails}/>
        <button type="submit" onClick={this.saveList}>Save</button>
      </div>
    )
  }

  editTask(event){
    this.setState({
      todoList:{
        task: event.target.value
      }
    });
  }

  editDetails(event){
    this.setState({
      todoList:{
        details: event.target.value
      }
    });
  }

  saveList(e){
    e.preventDefault();
    let task = this.refs.task.value;
    let details = this.refs.details.value;
    this.setState({
      todoList:{
        task: task,
        details: details
      },
      editing: true

      });
  }

  deleteList(e){
    e.preventDefault();
    this.setState({
      todoList:{}
    });
  }

  render() {
    if(this.state.editing){
     return this.editList()
    }
    else {
      return (
        <div>
          <li onClick={this.edit}>{this.state.todoList.task} </li>
          <li>{this.state.todoList.details} </li>
          <button type="submit" onClick={this.deleteList} id={this.state.todoList.id}>Delete</button>
        </div>
      )
    } 
  }

}

export default ListItem;
