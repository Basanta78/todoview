import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom'
let isAuthenticated = localStorage.getItem("isAuthenticated");
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    isAuthenticated==="true" ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/Login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);
export default PrivateRoute;