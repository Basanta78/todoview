import React, {Component} from 'react';
import axios from "axios/index";
import { Redirect } from 'react-router-dom';
import {refreshConfig} from './MainWrapper';
import {
  Link,
 
} from 'react-router-dom';

class Logout extends Component {
  constructor (){
    super();
    this.state={
      redirect : false
    }
    this.submitLogout = this.submitLogout.bind(this);
  }
  submitLogout( e ){
    e.preventDefault();
    refreshConfig.headers.Authorization = "Bearer " + localStorage.getItem("refreshToken");
    console.log(localStorage.getItem("refreshToken"))

    axios.delete( 'http://127.0.0.1:8848/api/logout', refreshConfig) 
      .then(res=>
      {
        console.log(res);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.setItem("isAuthenticated",false);
        this.setState(
          {
            redirect: true
          }
        )
      })
      .catch(err=> err);
    
  }
  render(){
    const {redirect} = this.state;
    if(redirect){
      
        return <Redirect to="/"/>
    }
    return (
            <button className = "btn btn-default" onClick ={this.submitLogout}><Link to = "/Logout">Logout</Link> </button>
              )

  }

}
export default Logout;