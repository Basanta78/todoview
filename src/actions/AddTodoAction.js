import * as TodoService from '../services/TodoService';
import {config} from '../Components/MainWrapper';
export const onChangeTask = ( task ) => {
  return {
    type: "CHANGE_TASK",
    task,
  }
}
export const onChangeDetails = ( details ) => {
  return {
    type: "CHANGE_DETAILS",
    details,
  }
}
export const startAddTodo = () => {
  return{
    type: "START_ADDTODO",
  }
}
export const addTodoList = (data) => {
  console.log(data)
  return{
    type: "SUCCESS_ADDTODO",
    data,
  }
}
export const errorAddTodo = (err) => {
  return {
    type: "ERROR_ADDTODO"
  }
}
export const addTodo = ( task, details, tags ) => {
  return (( dispatch ) => {
    dispatch( startAddTodo())
  let data =  {
    task,
    details,
    tags,
  };
  console.log(data)
  TodoService.postApiCall( 'todo', data, config)
    .then(res => {
       return dispatch( addTodoList(data) )
      }
    )
    .catch ((err) =>  {
      return dispatch(errorAddTodo(err))
    })
})
}

