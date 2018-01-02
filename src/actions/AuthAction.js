import { refreshConfig} from '../Components/MainWrapper';
import axios from "axios";
export const onChangeEmail = ( email ) => {
  return {
    type: "CHANGE_EMAIL",
    email,
  }
}
export const onChangePassword = ( password ) => {
  return {
    type: "CHANGE_PASSWORD",
    password,
  }
}
export const onSubmit = () => {
  return {
    type: "ON_SUBMIT",
  }
}
export const startLogout = () => {
  return {
    type: "START_LOGOUT"
  }
}
export const errorLogout = (err) => {
  return {
    type: "ERROR_LOGOUT",
    err,
  }
}
export const logoutSuccess = () => {
  return {
    type: "SUCCESS_LOGOUT"
  }
}
export const logoutUser  = () => {
  return ((dispatch) => {
    dispatch(startLogout())
    refreshConfig.headers.Authorization = "Bearer " + localStorage.getItem("refreshToken");
    axios.delete( 'http://127.0.0.1:8848/api/logout', refreshConfig) 
      .then(res=>
      {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.setItem("isAuthenticated",false);
        return dispatch( logoutSuccess() )
        
      }) 
      .catch((err) => {
        return dispatch(errorLogout(err))
      })
    })
}
export const startLogin = () => {
  return {
    type: "START_LOGIN",
  }
}
export const loginSuccess = () => {
  return {
    type: "SUCCESS_LOGIN"
  }
}
export const errorLogin = (err) => {
  return {
    type: "ERROR_LOGIN",
    err,
  }
}
export const loginUser = ( email, password ) => {
  return (( dispatch ) => {
    dispatch( startLogin())
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8848/api/login',
      data: {
        email: email,
        password: password,
      }
    })
      .then(res=>
      {
        localStorage.setItem("accessToken",res.data.data.token.access);
        localStorage.setItem("refreshToken",res.data.data.token.refresh);
        localStorage.setItem("isAuthenticated", true);
        // config.headers.Authorization = 'Bearer ' + res.data.data.token.access;
        return dispatch(loginSuccess());
        // refreshConfig.headers.Authorization = 'Bearer ' + res.data.data.token.refresh;
        

      })
      .catch ((err) =>  {
        return dispatch(errorLogin(err))
      })
    })
  }
