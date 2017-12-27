import * as TodoService from '../services/TodoService';
import {config} from '../Components/MainWrapper';

export const RECIEVE_TODO = 'RECIEVE_TODO';
export const REQUEST_TODO = 'REQUEST_TODO';


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