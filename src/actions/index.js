import * as TodoService from '../services/TodoService';
import {config} from '../Components/MainWrapper';
import { startDelete, onDeleteTodo, errorDelete, startEdit, errorEdit, onSubmitEdit } from './TodoAction';
import axios from "axios";

export const startFetch =() => {
  return {
    type: "FETCH_TODO_START",
  }
}

export const receiveTodos= (todo) => {
  return {
    type: "RECEIVE_TODO",
    todo,
  }
}
export const errorTodo = (error) => {
  return {
    type: "FETCH_TODO_ERROR",
    error,
  }
}

export const getTodo = () => {
  return ((dispatch) => {
    dispatch(startFetch)
   return TodoService.getApiCall( 'todo', config)
    .then( res => {
     return dispatch(receiveTodos(res.data.data))
    })
    .catch((err) =>{
      return dispatch(errorTodo(err))
      })
    })
}

export const deleteTodo  = (id,index) => {
  return ((dispatch) => {
    dispatch(startDelete)
    return axios.delete('todo/'+id, config)
    .then( res => {
      return dispatch( onDeleteTodo(id,index))
    })
    .catch((err) => {
      return dispatch(errorDelete(err))
    })
  })
}
export const editTodo  = (id,task,details) => {
  return ((dispatch) => {
    dispatch(startEdit)
  return axios.put( 'todo/'+id, {
      "task": task, 
      "details": details, 
    }, config )
      .then( res => {
        return dispatch( onSubmitEdit )
      }
    )
    .catch((err) => {
      return dispatch(errorEdit(err))
    })
  })
}
