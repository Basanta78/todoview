import React from 'react';
import axios from "axios/index";
import { onChangeEmail, onChangePassword, onChangeName, setRegister } from '../actions/AuthAction';
import { connect } from 'react-redux';
import Redirect from 'react-router-dom/Redirect';
const Register = (props) => {
 
  const submitRegister = ( e ) =>{
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8848/api/register',
      data: {
        name:  props.state.name,
        email:  props.state.email,
        password: props.state.password
      }
    })
      .then(res=>
      {
        props.setRegister();
      })
      .catch(err=> err);

  }
  
    return props.state.isRegister ?
    (
      <Redirect to = "/Login" />
    ):(
      <form onSubmit = { submitRegister}>
        <div className = "form-group">
        Name <input className = "form-control form-control-lg" type = "text"  value={ props.state.name} onChange = {(e) => props.onChangeName(e.target.value)}/>
        Email <input className = "form-control form-control-lg" type = "text"  value={ props.state.email} onChange = {(e) =>  props.onChangeEmail(e.target.value)}/>
        Password <input className = "form-control form-control-lg" type = "password"  value= { props.state.password} onChange = {(e) =>  props.onChangePassword(e.target.value)}/>
        <button className = "btn btn-primary" type = "submit">Register</button>
        </div>
      </form>

    )

  

}
const mapStateToProps = (state) =>({state: state.auth})
const mapDispatchToProps = dispatch => {
  return {
    onChangeName: name => {
      dispatch(onChangeName(name))
    },
    onChangeEmail: email => {
      dispatch(onChangeEmail(email))
    },
    onChangePassword: password => {
      dispatch(onChangePassword(password  ));
    },
    submitRegister: () => {
      dispatch(setRegister())
    }
  }
}
const RegisterApp = connect(mapStateToProps, mapDispatchToProps)(Register)
export default RegisterApp;