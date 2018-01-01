import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux';
import todo from './GetTodo';
import auth from './AuthReducer';

const rootReducer = combineReducers({
  form: formReducer,
  todo,
  auth,

})

export default rootReducer;
