import React, { Component } from 'react';
import axios from 'axios';
// import * as TodoService from '../services/TodoService';
import {config} from './MainWrapper';


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
    axios.put( 'todo/'+this.props.todoList.id, {
      "task": this.state.todoList.task,
      "details": this.state.todoList.details
    }, config )
      .then(
      () => this.props.getTodo()
    )
      .catch( err => err )
  }

  deleteList(e){
    e.preventDefault();
    let id =  e.target.id;
    axios.delete('todo/'+id).then(
      () => this.props.getTodo()
    )
  }

  render() {
    console.log(this.props.todoList.task);
    if(this.state.editing){
     return this.editList()
    }
    else {
      return (
        <div>
          <div className = "row">
          <li className = "list-group-item list-group-item-info " onClick={this.toggleEdit}>Task: {this.props.todoList.task}  </li>
          </div>
          <div className = "row">
            <li className = "list-group-item list-group-item-info" >Details:{ this.props.todoList.details }</li>
          </div>
          <ul>
            { this.props.todoList.tags.map(( tag =>
                <div className= "badge badge-primary"> {tag.tag }</div>
            ))}
          </ul>

            <button className = "btn btn-primary" data-toggle="modal" data-target="#exampleModal" type="submit" onClick={this.toggleEdit} id={this.props.todoList.id}>Edit</button>
          <button className = "btn btn-danger" type="submit" onClick={this.deleteList} id={this.props.todoList.id}>Delete</button>
        </div>
      )
    } 
  }

}

export default ListItem;
