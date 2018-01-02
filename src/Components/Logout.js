import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Link,
 
} from 'react-router-dom';
import { logoutUser } from '../actions/AuthAction';
import { connect } from  'react-redux';

const Logout = (props) => {
    return  props.state.isAuthenticated.toString() === "false" ?
      (
                <Redirect to= "/"/>
      ): (
            <button className = "btn btn-default" onClick ={props.logoutUser}><Link to = "/Logout">Logout</Link> </button>
              )
            

  }

  
const mapStateToProps = (state) =>({state:state.auth})
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: ()=> {
      dispatch(logoutUser())
    },
  }
}
const LogoutApp = connect(mapStateToProps,mapDispatchToProps)( Logout )
export default LogoutApp;
