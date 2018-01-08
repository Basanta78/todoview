import { connect } from 'react-redux';
import {MainWrapper} from  '../Components/MainWrapper';
import {getTodo, getTags } from '../actions/ActionCreator';
const matchStatetoProps = (state) =>({state})
const matchDispatchtoProps = (dispatch) => {
  return {
    getTodo:(page) => {
      dispatch(getTodo(page))
    },
    getTags: () => {
      dispatch( getTags() )
    }

    
  }
}

const containerWrapper = connect(matchStatetoProps,matchDispatchtoProps)(MainWrapper)
export default containerWrapper;