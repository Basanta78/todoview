import { connect } from 'react-redux';
import {MainWrapper} from  '../Components/MainWrapper';
import {getTodo} from '../actions/index';
const matchStatetoProps = (state) =>({state})
const matchDispatchtoProps = (dispatch) => {
  return {
    getTodo:() => {
      dispatch(getTodo())
    }
    
  }
}

const containerWrapper = connect(matchStatetoProps,matchDispatchtoProps)(MainWrapper)
export default containerWrapper;