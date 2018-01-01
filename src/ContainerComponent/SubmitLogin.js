import axios from "axios";
import { onSubmit } from "../actions/AuthAction";
export const onLoginSubmit = (values) => {
  console.log(values)
  axios({
    method: 'post',
    url: 'http://127.0.0.1:8848/api/login',
    data: {
      email: values.Email,
      password: values.password,
    }
  })
  .then(res=>
    {
      localStorage.setItem("accessToken",res.data.data.token.access);
      localStorage.setItem("refreshToken",res.data.data.token.refresh);
      localStorage.setItem("isAuthenticated",true);
      values.dispatch({type: "ON_SUBMIT"});
    })
    .catch(err=> err);
}