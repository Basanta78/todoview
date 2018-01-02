import { AUTHSTATE } from '../constants/constant';

const Auth = (state = AUTHSTATE, action) => {
  switch (action.type) { 
    case "CHANGE_PASSWORD":
      return { ...state,
        password: action.password }
    case "CHANGE_EMAIL":
        return { ...state,
        email: action.email }
    case "START_LOGOUT":
      return {...state, 
        didInvalidate: false,
    }
    case "SUCCESS_LOGOUT":  
    return {...state, 
      isAuthenticated: false,
    }
    case "ERROR_LOGOUT":
    return {...state,
      didInvalidate: true,
    }
    case "START_LOGIN":
      return { ...state,
          didInvalidate:false,
        }
    case "SUCCESS_LOGIN":
      return { ...state,
          isAuthenticated: true,
        }
    case "ERROR_LOGIN":
      return { ...state,
        didInvalidate:true,
      }
    default:
    return { ...state }
  }
}
export default Auth;