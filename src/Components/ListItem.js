import React, { Component } from 'react';
import axios from 'axios';


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
    this.setState({
      editing: false
      });
    //api call
    axios.put('todo/'+this.props.todoList.id,{
      "task": this.state.todoList.task,
      "details": this.state.todoList.details
    }).then(
      () => this.props.getTodo()
    )
  }

  deleteList(e){
    e.preventDefault();
    let id =  e.target.id;
    axios.delete('todo/'+id).then(
      () => this.props.getTodo()
    )
   //api call


  }

  render() {
    // console.log(this.props.todoList.tags.tag);
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
