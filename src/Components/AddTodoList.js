import React from 'react';
import { connect } from 'react-redux';
import { onChangeTask, onChangeDetails, addTodo} from '../actions/AddTodoAction';
import { pushTag, popTag } from '../actions/TagAction';

const AddTodoList = (props) => {
  const handleCheckInput =  (e) => {
    if(e.target.checked){
      props.pushTag(e.target.id);
    }
    else{
      props.popTag(e.target.id);
    }

  }

   return (
      <div>
        <form className = "form-inline" onSubmit = {(e) =>props.addTodoList(e,props.state.task, props.state.details,props.state.inputTags)}>
          Task <input className = "form-control" type = "text" value={ props.state.task } onChange = {(e) => props.onChangeTask(e.target.value) }/>
           Details <input className = "form-control" type = "text" value= { props.state.details } onChange = { (e) => props.onChangeDetails(e.target.value) }/>
          <button className = "btn btn-primary" type = "submit">Add todo</button>
        </form>
        <ul>
      {props.state.tags.map((tag,index) => {
      return(   <div className="checkbox checkbox-inline">
          <input type="checkbox" id={tag.id} onClick = {handleCheckInput}/>
            {tag.tag}
        </div>)
      })}
      </ul>
      </div>
    );
  }

const mapStateToProps = (state) =>({state: state.todo})
const mapDispatchToProps = dispatch => {
  return {
    onChangeTask: task => {
      dispatch(onChangeTask(task))
    },
    onChangeDetails: details => {
      dispatch(onChangeDetails(details))
    },
    addTodoList: (e,task, details,tags) => {
      e.preventDefault();
      dispatch(addTodo(task, details,tags))
    },
    pushTag: (id) => {
      dispatch(pushTag(id));
    },
    popTag: (id) => {
      dispatch(popTag(id));
    }
  
  }
}
const AddTodoListApp = connect(mapStateToProps, mapDispatchToProps)(AddTodoList)
export default AddTodoListApp;

