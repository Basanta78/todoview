import { combineReducers } from 'redux';
import todo from './GetTodo';
import auth from './AuthReducer';

const rootReducer = combineReducers({
  todo,
  auth,

})

export default rootReducer;
