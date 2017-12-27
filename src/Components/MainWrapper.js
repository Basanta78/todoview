import React, { Component } from 'react';
import SearchField from "./SearchField";
import TodoList from './TodoList';
import * as TodoService from '../services/TodoService';
import axios from 'axios';
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import {getTodo} from '../actions/index';

axios.defaults.baseURL = 'http://127.0.0.1:8848/api/users/1/';

let refreshConfig ={
  headers:{
    'Authorization': ''
  }
};
let config = {
  headers: {
    'Authorization': ''
  }
};

async function getAcessToken (  ) {
  try{
    refreshConfig.headers.Authorization = "Bearer " + localStorage.getItem("refreshToken");
    let tokens = await axios.get('http://127.0.0.1:8848/api/login/refresh',refreshConfig);
    localStorage.setItem("accessToken",tokens.data)
    config.headers.Authorization = 'Bearer ' + localStorage.getItem("accessToken");
    return tokens;
  }
  catch (err){
    throw err;
  }


}
axios.interceptors.response.use(undefined, (err) => {
  let res = err.response;
  console.log(err.config.headers);
  if (res.status === 401) {
    return getAcessToken().then(token => {
      err.config.headers.Authorization = config.headers.Authorization;
        return axios.request( err.config )
      }
    ).catch(err => err);
  }
  return Promise.reject(err);

});

class MainWrapper extends Component {

  constructor () {
    super ();
    this.state = {
      todoList: [],
      userCredentials:{
        email: "",
        password: ""
      }
    };
    // this.getTodo = this.getTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount(){
    // console.log(this.props.getTodo());
    this.props.getTodo();
  }
  // getTodo (){
  //   this.props.getTodo());
  //   // TodoService.getApiCall( 'todo', config)
  //   //   .then( res => {
  //   //     if(res) {
  //   //       this.setState ( { todoList: res.data.data.Todos } );
  //   //     }
  //   //   })
  //   //   .catch(err => err);
  // }

  addTodo( todo ) {
    let todoList = this.state.todoList.slice();
    let data =  {
      "task": todo.todoList.task,
      "details": todo.todoList.details
    };
    TodoService.postApiCall( 'todo', data, config)
      .then(res => {
          todoList.push(res.data.data);
          this.setState({todoList});
        }
      )
      .catch( err => err );
  }


  render() {
    return (
        <div className = "mainWrapper">
          <TodoList addTodo = { this.addTodo } editTodo = { this.addTodo } changeState={ this.changeState } todoList = { this.state.todoList }/>
          <SearchField getTodo = {this.getTodo} todoLists = { this.state.todoList }/>
      </div>
    );
  }
}

export { MainWrapper, config, refreshConfig };
