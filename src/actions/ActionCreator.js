import * as TodoService from '../services/TodoService';
import {config} from '../Components/MainWrapper';
import { startDelete, onDeleteTodo, errorDelete, startEdit, errorEdit, onSubmitEdit, setMetadata } from './TodoAction';
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
export const receiveSearchTodos= (todo) => {
  return {
    type: "RECEIVE_SEARCH_TODO",
    todo,
  }
}
export const errorTodo = (error) => {
  return {
    type: "FETCH_TODO_ERROR",
    error,
  }
}

export const getTodo = (page) => {
  let pageNo = page || 1
  return ((dispatch) => {
    dispatch(startFetch)
   return TodoService.getApiCall( 'todo/'+pageNo, config)
    .then( res => {
     dispatch(receiveTodos(res.data.data))
     return dispatch(setMetadata(res.data.data.metadata))

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
    dispatch(startEdit())
  return axios.put( 'todo/'+id, {
      "task": task, 
      "details": details, 
    }, config )
      .then( res => {
        return dispatch( onSubmitEdit() )
      }
    )
    .catch((err) => {
      return dispatch(errorEdit(err))
    })
  })
}
export const startFetchTags =() => {
  return {
    type: "FETCH_TAGS_START",
  }
}

export const receiveTags= (tags) => {
  return {
    type: "RECEIVE_TAGS",
    tags,
  }
}
export const errorTags = (error) => {
  return {
    type: "FETCH_TAGS_ERROR",
    error,
  }
}
export const getTags = () => {
  return ((dispatch) => {
    dispatch(startFetchTags)
   return TodoService.getApiCall( 'http://localhost:8848/api/tags')
    .then( res => {
     return dispatch(receiveTags(res.data.data))
    })
    .catch((err) =>{
      return dispatch(errorTags(err))
      })
    })
}
export const searchTodo = (search) => {
  return ((dispatch) => {
   return TodoService.getApiCall(search, config)
    .then( res => {
      console.log(res.data.data.Todos)
      dispatch(receiveSearchTodos(res.data.data))
      return dispatch(setMetadata(res.data.data.metadata))
    })
    .catch((err) =>{
      return dispatch(errorTodo(err))
      })
    })
}
