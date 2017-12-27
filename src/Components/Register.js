import React, {Component} from 'react';
import axios from "axios/index";

class Register extends Component {
  constructor (){
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
  }
  submitRegister( e ){
    e.preventDefault();

    //handle login
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8848/api/register',
      data: {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      }
    })
      .then(res=>
      {

        this.setState(
          {
            redirect: true
          }
        )

      })
      .catch(err=> err);

  }
  handleChange( e ){
    let form = {...this.state}
    form[e.target.name] = e.target.value;
    // this.setState({
    //   name: e.target.value || this.state.name,
    //   email: e.target.value || this.state.email,
    //   password: e.target.value || this.state.password,
    // })
    this.setState(form);
  }
  render(){
    // const {redirect} = this.state;
    // if(redirect){
    //   console.log(redirect)
    //   return <Redirect to="/Todo"/>
    // }
    return (
      <form onSubmit = {this.submitRegister}>
        <div className = "form-group">
        Name <input className = "form-control form-control-lg" type = "text" name = "name" value={this.state.name} onChange = {this.handleChange}/>
        Email <input className = "form-control form-control-lg" type = "text" name = "email" value={this.state.email} onChange = {this.handleChange}/>
        Password <input className = "form-control form-control-lg" type = "password" name = "password" value= {this.state.password} onChange = {this.handleChange}/>
        <button className = "btn btn-primary" type = "submit">Register</button>
        </div>
      </form>

    )

  }

}
export default Register;