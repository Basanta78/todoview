import * as TodoService from '../services/TodoService';
import {config} from '../Components/MainWrapper';
import { startDelete, onDeleteTodo, errorDelete } from './TodoAction';
import axios from "axios";
import { combineReducers } from '../../../../../.cache/typescript/2.6/node_modules/redux';

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

export const deleteTodo  = (id) => {
  console.log("start delete")
  return ((dispatch) => {
    console.log("start Delete")
    dispatch(startDelete)
    return axios.delete('todo/'+id, config)
    .then( res => {
      return dispatch( onDeleteTodo(id))
    })
    .catch((err) => {
      return dispatch(errorDelete(err))
    })
  })
}