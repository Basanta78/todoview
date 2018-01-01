import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
const SearchField = ( props ) => {
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
      {props.state.todo.todoList.map((todoList,index) => {
        return (<ListItem todoList = {todoList}  index ={index} />)
      })}
      </ul>
      </div>

    );
  }

const matchStatetoProps = (state) =>({state})


const SearchFieldApp = connect(matchStatetoProps)(SearchField)

export default SearchFieldApp;
 