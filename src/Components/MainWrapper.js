import React, { Component } from 'react';
import SearchField from "./SearchField";
import TodoList from './TodoList';
import axios from 'axios';
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
    let tokens = await axios.get('http://127.0.0.1:8848/api/login/refresh',refreshConfig);
    config.headers.Authorization = 'Bearer ' + tokens.data;
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
      todoList: []
    };
    this.getTodo = this.getTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount () {
    console.log("post");
    // Send a POST request
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8848/api/login',
      data: {
        email: 'user1@gmail.com',
        password: 'user1pass'
      }
    }).then(res=> {console.log("login",res.data.data.token.refresh);
      config.headers.Authorization = 'Bearer ' + res.data.data.token.access;
    refreshConfig.headers.Authorization = 'Bearer ' + res.data.data.token.refresh;
      this.getTodo();}).catch(err=> console.log(err));

  }
  getTodo (){

    axios.get( `todo`, config)
      .then( res => {
        if(res) {
          this.setState ( { todoList: res.data.data.Todos } );
        }
      });
    console.log("get called",config);
  }
  addTodo( todo ) {
    axios.post( 'todo', {
      "task": todo.todoList.task,
      "details": todo.todoList.details
    })
      .then( () =>  {
        this.getTodo();

      })
      .catch( function ( error ) {
        console.log( error );
      });
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

export default MainWrapper;
