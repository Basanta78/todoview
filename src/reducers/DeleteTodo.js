import { INITIALSTATE } from '../constants/constant'

const deletTodo =(state=INITIALSTATE, action) => {
  switch (action.type) {
    case "ON_DELETE":
      return {...state, 
        didInvalidate: true
      }
    default:
      return state
    }
}