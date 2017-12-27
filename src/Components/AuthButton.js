import React from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import Logout from './Logout';
let isAuthenticated = localStorage["isAuthenticated"];
console.log((isAuthenticated));
const AuthButton = withRouter(({ history }) => (
  isAuthenticated==="true" ? (
    <div>
    <Logout/>
    </div>
  ) : (
    <div>
    <button className = "btn btn-secondary"><Link to = "/Login">Login</Link></button>
    <button className = "btn btn-default"><Link to = "/Register">Register</Link> </button>
    </div>
  )
))

export default AuthButton;