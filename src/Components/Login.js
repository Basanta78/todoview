import React, {Component} from 'react';
import axios from "axios/index";
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { onSubmit,onChange } from '../actions/LoginAction'


class Login extends Component {
  constructor (props){
    super(props);
    this.state = {
      email: "",
      password: "",
      redirect: false,
  };
  this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword  = this.handleChangePassword.bind(this);
    this.submitLogin = this.submitLogin.bind(this);

  }
  submitLogin( e ){
    e.preventDefault();
    //handle login
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8848/api/login',
      data: {
        email: this.state.email,
        password: this.state.password,
      }
    })
      .then(res=>
      {
        localStorage.setItem("accessToken",res.data.data.token.access);
        localStorage.setItem("refreshToken",res.data.data.token.refresh);
        localStorage.setItem("isAuthenticated", true);
        // config.headers.Authorization = 'Bearer ' + res.data.data.token.access;
        // refreshConfig.headers.Authorization = 'Bearer ' + res.data.data.token.refresh;
        this.setState(
          {
            redirect: true
          }
        )

      })
      .catch(err=> err);

  }
  handleChangeEmail( e ){
    this.setState ({
      email: e.target.value
    })

  }
  handleChangePassword(e){
    this.setState ({
      password: e.target.value
    })
  }

  render(){
    console.log(this.props)
    const {redirect} = this.state;
    if(redirect){
      return <Redirect to="/Todo"/>
    }
      return (
    <form onSubmit = {this.onSubmit}>
      Email <input className = "form-control form-control-lg" type = "text" value={this.props.state} onChange = {(onChange)}/>
      Password <input className = "form-control form-control-lg" type = "password" value= {this.props.state} onChange = {this.props.handleOnChange}/>
      <button className = "btn btn-primary" type = "submit">Login</button>
    </form>

  )

  }

}
const mapStateToProps = (state) =>({state})
const mapDispatchToProps = dispatch => {
  return {
    handleSubmit: payload => {
      dispatch(onSubmit(payload))
    },
    handleOnChange:event => {
      dispatch(onChange(event));
    }
  }
}
const LoginContainer = connect(mapStateToProps)(Login)
export default LoginContainer;