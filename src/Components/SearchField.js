import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { onDelete } from '../actions/TodoAction';
import { deleteTodo } from '../actions/index';

const SearchField = ( props ) => {
  console.log("from search",props.state.todoList.todoList);

 const updateSearch = (event) => {
    this.setState({
      search:event.target.value
    });
  }
const deleteList = (e) => {
    e.preventDefault();
      props.dispatch(deleteTodo(e.target.id));
    console.log(props);
  }
    return (
      <div>
        <form>
          <div className="form-row">
              <input type="text"
                     placeholder="search"
                     value=''
                     onChange={this.updateSearch}
              />
          </div>
        </form>

      <ul>
      {props.state.todoList.todoList.map((todoList => {
        return (<ListItem todoList = {todoList} deleteList = {deleteList} />)
      }))}
      </ul>
      </div>

    );
  }

const matchStatetoProps = (state) =>({state})


const SearchFieldApp = connect(matchStatetoProps)(SearchField)

export default SearchFieldApp;
