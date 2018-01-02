import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux'
const PrivateRoute = ({ component: Component,state, ...rest }) => (
  <Route {...rest} render={(props) =>
   (
    state.isAuthenticated.toString() === "true" ? 
    (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/Login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);
const mapStateToProps = (state) =>({state:state.auth})
const PrivateRouteApp = connect(mapStateToProps)( PrivateRoute )
export default PrivateRouteApp;