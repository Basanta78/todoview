
let INITIALSTATE = {
  isFetching: false,
  didInvalidate: false,
  todoList: [],
 }
 
const getTodo =(state=INITIALSTATE, action) => {
  switch (action.type) {
    case "FETCH_TODO_ERROR":
      return {...state, 
        didInvalidate: true
    }
    case "FETCH_TODO_START":
    return {...state, 
      isFetching: true,
      didInvalidate: false
    }
    case "RECEIVE_TODO":
    console.log(action.todo)
      return {...state, 
        isFetching: false,
        didInvalidate: false,
        todoList: action.todo.todoList,
      }
    default:
      return state
    }
}
export default getTodo;