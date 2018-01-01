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
      return {...state, 
        isFetching: false,
        didInvalidate: false,
        todoList: action.todo.Todos,
      }

    case "DELETE_TODO":
    const LIST = [...state.todoList.slice(0,action.index), ...state.todoList.slice(action.index+1)]
      return {...state, todoList: LIST}
    case "DELETE_START":
      return {...state, isDeleting: true }
    case "DELETE_ERROR":
      return { ...state, didInvalidate: true }
    case "EDIT_TASK":
      let EDITLIST = [...state.todoList];
      EDITLIST[action.index].task = action.task;
      return { ...state, todoList:EDITLIST}
    case "EDIT_DETAILS":
      let EDITDETAILS = [...state.todoList];
      EDITDETAILS[action.index].details = action.details;
      return { ...state, todoList:EDITDETAILS}
    case "EDIT_START":
      return { ...state, isEditing: true }
    case "EDIT_ERROR":
      return { ...state, didInvalidate: true }
    case "EDIT_SUBMIT":
      return { ...state}
    case "SET_EDIT":
      return { ...state, isEditing: true}
    default:
      return state
    }
}
export default Todo;