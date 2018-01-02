import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { onChangeEmail, onChangePassword, loginUser } from '../actions/AuthAction';


const Login = (props) => {
  const { from } = props.location.state || { from: { pathname: '/' } }
  console.log("value",props.state.isAuthenticated)
  let a = (props.state.isAuthenticated === true)? console.log("yes"): console.log("no");
  // console.log(a);


  return props.state.isAuthenticated.toString() === "true" ?
    (
      <Redirect to={ from }/>
    ):
    (
    <form onSubmit = {(e) => props.loginUser(e,props.state.email, props.state.password)}>
      Email <input className = "form-control form-control-lg" type = "text" value={props.state.email} onChange = {(e) => props.onChangeEmail(e.target.value)}/>
      Password <input className = "form-control form-control-lg" type = "password" value= {props.state.password} onChange = {(e) =>props.onChangePassword(e.target.value)}/>
      <button className = "btn btn-primary" type = "submit">Login</button>
    </form>
    )
  
  
  }

const mapStateToProps = (state) =>({state: state.auth})
const mapDispatchToProps = dispatch => {
  return {
    onChangeEmail: email => {
      dispatch(onChangeEmail(email))
    },
    onChangePassword: password => {
      dispatch(onChangePassword(password  ));
    },
    loginUser: (e,email, password) => {
      e.preventDefault();
      dispatch( loginUser(email, password) );
    }
  }
}
const LoginApp = connect(mapStateToProps, mapDispatchToProps)(Login)
export default LoginApp;