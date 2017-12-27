import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Redirect } from 'react-router-dom';

import { onLoginSubmit } from '../ContainerComponent/SubmitLogin'


const Login = ( props ) => { 
  const { handleSubmit, pristine, reset, submitting } = props
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(isAuthenticated);
      return (
          isAuthenticated==="true" ? 
         ( <Redirect to="/"/>):          
        <form onSubmit={handleSubmit(onLoginSubmit)}>
      <div>
        <label>Email</label>
        <div>
          <Field
            name="Email"
            component="input"
            type="text"
            placeholder="user@example.com"
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name="password"
            component="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <button type="submit" disabled={pristine || submitting}>Submit</button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
      Clear Values
        </button>
      </form>

  )

  }
  export default reduxForm({
    form: 'login' 
  })(Login)