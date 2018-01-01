import React, {Component} from 'react';
import axios from "axios/index";
import { Redirect } from 'react-router-dom';
import {refreshConfig} from './MainWrapper';
import {
  Link,
 
} from 'react-router-dom';
import { logoutUser } from '../actions/AuthAction';
import { connect } from  'react-redux';

class Logout extends Component {
  constructor (){
    super();
  
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
      
      })
      .catch(err=> err);
    
  }
  render(){
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if(isAuthenticated === "false"){
      
        return <Redirect to="/"/>
    }
    return (
            <button className = "btn btn-default" onClick ={this.props.logoutUser}><Link to = "/Logout">Logout</Link> </button>
              )

  }

}
const mapStateToProps = (state) =>({state})
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: ()=> {
      dispatch(logoutUser())
    },
  }
}
const LogoutApp = connect(mapStateToProps,mapDispatchToProps)( Logout )
export default LogoutApp;
