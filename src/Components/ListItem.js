import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo, editTodo } from '../actions/ActionCreator';
import { editTask, editDetails,setEditing, onSubmitEdit } from '../actions/TodoAction';
import '../css/index.css'



const ListItem = (props) => {

  const editList = () => {
    return(
      <div>
            {props.state.editTaskId === props.todoList.id ?

        (
          <div className = "popup">
          <input className = "form-control form-control-lg" type="text" value={props.todoList.task} onChange={(e) => props.editTodoTask( props.index,e.target.value)}/>
        <input className = "form-control form-control-lg" type="text" value={ props.todoList.details}  onChange={(e) => props.editTodoDetails( props.index,e.target.value)}/>
        <button className = "btn btn-primary" type="submit" onClick={() =>  props.saveTodo( props.todoList.id,  props.todoList.task,  props.todoList.details )}>Save</button>
        </div>
        )
        : null}
      </div>
    )
  }
      return (
        <div>
       { props.state.isEditing ? editList()  :null}
        
        <div> 
           <div className = "row"> 
          <li className = "list-group-item list-group-item-info " onClick={ () =>props.setEditing(props.todoList.id) }> Task: { props.todoList.task}  </li>
          </div>
          <div className = "row">
            <li className = "list-group-item list-group-item-info" >Details:{  props.todoList.details }</li>
          </div>
           <ul>
            {  props.todoList.tags.map(( tag =>
                <div className= "badge badge-primary"> {tag.tag }</div>
            ))}
          </ul> 
          <button className = "btn btn-primary" data-toggle="modal" data-target="#exampleModal" type="submit" onClick={ () =>props.setEditing(props.todoList.id)} id={ props.todoList.id}>Edit</button>
          <button className = "btn btn-danger" type="submit" onClick={() => props.deleteTodo( props.todoList.id, props.index)} id={ props.todoList.id}>Delete</button>
            </div>
            
        </div>
      )
    } 
const matchStatetoProps = (state) =>({state:state.todo})
const matchDispatchtoProps = (dispatch) => {
  return {
    deleteTodo:( id, index ) => {
      dispatch(deleteTodo(id,index));
    },
    editTodoTask: ( index, task ) => {
      dispatch(editTask( index, task ));
    },
    editTodoDetails: ( index, details) => {
      dispatch( editDetails( index,details ))
    },
    saveTodo: ( id, task, details ) => {
      dispatch(editTodo(id, task, details))
    },
    setEditing: (taskId) => {
      dispatch(setEditing(taskId))
    },
    resetEditing: () => {
      dispatch(onSubmitEdit())
    }
    
  }
}
const ListItemApp = connect(matchStatetoProps,matchDispatchtoProps)(ListItem)
    
export default ListItemApp;
