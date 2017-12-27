import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import '../css/index.css';

import Home from '../Pages/Home';

import About from '../Pages/About';
import { createStore, applyMiddleware, compose } from 'redux';
import Topics from '../Pages/Topics';
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from 'react-redux'
import Login from '../Components/SLogin';
import 'bootstrap/dist/css/bootstrap.css';
import Register from '../Components/Register';
import AuthButton from '../Components/AuthButton';
import rootReducer from '../reducers/LoginReducer';
import MainWrapper from '../ContainerComponent/MainWrapper';
import PrivateRoute from '../Components/PrivateRoute';


const  middleware = applyMiddleware(thunk,logger);

const store = createStore(rootReducer, compose(middleware ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const TodoRoute = () => (
  <div className="main-container">
  <h1> TODO APP </h1>
  <Provider store = { store }>
  <Router>
    <div>
      <div className="header navbar navbar-expand-lg navbar-light bg-light clearfix">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to = "/Todo">Todo</Link></li>
        <li><Link to="/AddTodo">Protected Todo</Link></li>
      </ul>
      <AuthButton/>
      </div>
      <hr/>

      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      {/* <Route path = "/Todo" component = {MainWrapper}/> */}
      <Route path = "/Login" component = {Login}/>
      <Route path = "/Register" component = {Register}/>
      <PrivateRoute path="/AddTodo" component={MainWrapper}/>
      </Switch>
    </div>
  </Router>
  </Provider>
  </div>
)





export default TodoRoute;