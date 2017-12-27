import React, { Component } from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';

const SearchField = ( props ) => {

 const updateSearch = (event) => {
    this.setState({
      search:event.target.value
    });
  }
 console.log(props.state.todoList.Todos)
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
      {[].map((todoList => {
        return (<ListItem getTodo = {this.props.getTodo}  todoList = {todoList} key = {todoList.id} />)
      }))}
      </ul>
      </div>

    );
  }

const matchStatetoProps = (state) =>({state})


const SearchFieldApp = connect(matchStatetoProps)(SearchField)

export default SearchFieldApp;
