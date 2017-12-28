import { INITIALSTATE } from '../constants/constant'

 
const getTodo =(state=INITIALSTATE, action) => {
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
    default:
      return state
    }
}
export default getTodo;