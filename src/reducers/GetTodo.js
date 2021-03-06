import { INITIALSTATE } from '../constants/constant'

 
const Todo =(state=INITIALSTATE, action) => {
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
      return {...state, 
        isFetching: false,
        didInvalidate: false,
        todoList: action.todo.Todos,
      }
    case "RECEIVE_SEARCH_TODO":
      return { ...state,
        todoList:action.todo.Todos
      }
    case "SET_METADATA":
      return { ...state,
        metadata: action.metadata}
    case "SET_SEATCHTEXT":
      return { ...state,
        searchText:action.search}
    case "CHANGE_DATE":
      return { ...state,
      date: action.date }

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
      return { ...state, isEditing: false }
    case "SET_EDIT":
      return { ...state, isEditing: true,editTaskId:action.taskId}

    case "CHANGE_TASK":
      return { ...state,
        task: action.task }
    case "CHANGE_DETAILS":
        return { ...state,
        details: action.details }
    case "START_ADDTODO":
        return { ...state,
        didInvalidate: false,
      }
    case "SUCCESS_ADDTODO":
      return { ...state,todoList:[...state.todoList,action.data]
      }
    case "ERROR_ADDTODO":
      return { ...state,
        didInvalidate: false,}

     case "FETCH_TAGS_ERROR":
      return {...state, 
        didInvalidate: true
    }
    case "FETCH_TAGS_START":
    return {...state, 
      didInvalidate: false
    }
    case "RECEIVE_TAGS":
      return {...state, 
        didInvalidate: false,
        tags: action.tags,
      }
    case "PUSH_TAG":
      return{ ...state,inputTags:[...state.inputTags,action.id]
      }
    case "POP_TAG":
    const INDEX = state.inputTags.indexOf(action.id);
    const TAGLIST = [...state.inputTags.slice(0,INDEX), ...state.inputTags.slice(INDEX+1)]
      return { ...state, inputTags:TAGLIST}
      
    case "REORDER_ITEM":
      return { ...state, todoList:reorderList([...state.todoList],action.id,action.index)}
    default:
      return { ...state}
    }
    function reorderList (array, value, positionChange) {
      let oldIndex = array.findIndex(x => x.id===value);
      let arrayClone = array.slice();
      arrayClone.splice( positionChange, 0, arrayClone.splice(oldIndex, 1)[0]);
      return arrayClone;      
    }
}
export default Todo;
