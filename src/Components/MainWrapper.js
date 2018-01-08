import React, { Component } from 'react';
import SearchField from "./SearchField";
import AddTodoList from './AddTodoList';
import axios from 'axios';
import '../css/index.css';

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
  componentDidMount(){
    this.props.getTodo(1);
    this.props.getTags();

  }
  render() {
    return (
        <div className = "mainWrapper">
          <AddTodoList />
          <SearchField />
      </div>
    );
  }
}

export { MainWrapper, config, refreshConfig };
