import React, { Component } from 'react';

class ListItem extends Component {

  constructor (props) {
    super(props);
    this.state={
      todoList:{
        task: "",
        details: ""
      },
      editing :false
    };

  this.deleteList = this.deleteList.bind(this);
  this.toggleEdit = this.toggleEdit.bind(this);
  this.editList = this.editList.bind(this);
  this.saveList = this.saveList.bind(this);
  this.editTask = this.editTask.bind(this);
  this.editDetails = this.editDetails.bind(this);

  }

  toggleEdit(event){
    event.preventDefault();
    this.setState({
      todoList:{
        task: this.props.todoList.task,
        details: this.props.todoList.details
      },
      editing: true
    });
  }

  editList(){
    return(
      <div>
        <input type="text" value={this.state.todoList.task} onChange={this.editTask}/>
        <input type="text" value={this.state.todoList.details}  onChange={this.editDetails}/>
        <button type="submit" onClick={this.saveList}>Save</button>
      </div>
    )
  }

  editTask(e){
    this.setState({
      todoList:{
        task: e.target.value,
        details: this.state.todoList.details
      }
    });
  }

  editDetails(e){
    this.setState({
      todoList:{
        task: this.state.todoList.task,
        details: e.target.value
      }
    });
  }

  saveList(e){
    e.preventDefault();
    console.log(this.state.todoList);
    this.setState({
      editing: false
      });
    //api call
  }

  deleteList(e){
    e.preventDefault();
    console.log(e.target.id);
   //api call
  }

  render() {
    if(this.state.editing){
     return this.editList()
    }
    else {
      return (
        <div>
          <li onClick={this.toggleEdit}>{this.props.todoList.task} </li>
          <li>{this.props.todoList.details} </li>
          <button type="submit" onClick={this.deleteList} id={this.props.todoList.id}>Delete</button>
        </div>
      )
    } 
  }

}

export default ListItem;
