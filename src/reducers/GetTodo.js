import { INITIALSTATE } from '../constants/constant'

 
const Todo =(state=INITIALSTATE, action) => {
  switch (action.type) {
    case "FETCH_TODO_ERROR":
      return {...state, 
        didInvalidate: true
    }
    case "FETCH_TODO_START":
    console.log('state befores', state);
    return {...state, 
      isFetching: true,
      didInvalidate: false
    }
    case "RECEIVE_TODO":
    console.log("stae",action.todo)
      return {...state, 
        isFetching: false,
        didInvalidate: false,
        todoList: action.todo.Todos,
      }
    case "DELETE_TODO":
    console.log([...state.todoList]);

    const LIST = [...state.todoList].splice(action.id);
      return {...state, todoList: LIST}
    case "DELETE_START":
      return {...state, isDeleting: true }
    case "DELETE_ERROR":
      return { ...state, didInvalidate: true }
    default:
      return state
    }
}
export default Todo;