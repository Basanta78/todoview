import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import todoList from './GetTodo';

const rootReducer = combineReducers({
  form: formReducer,
  todoList,

})

export default rootReducer;
