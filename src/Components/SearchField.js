import React, { Component } from 'react';
import ListItem from './ListItem'

class SearchField extends Component {

  constructor ( props ){
    super( props );
    this.state = {
      search: "",
      todoLists:''
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event){
    this.setState({
      search:event.target.value
    });
  }
  render() {
    let filterTodo = this.props.todoLists.filter((todo) => {
      return todo.details.indexOf( this.state.search ) !== -1;
    });

    return (
      <div>
      <input type="text"
             placeholder="search"
             value={this.state.search}
             onChange={this.updateSearch}
      />
      <ul>
      {filterTodo.map((todoList => {
        return (<ListItem getTodo = {this.props.getTodo}  todoList = {todoList} key = {todoList.id} />)
      }))}
      </ul>
      </div>

    );
  }
}

export default SearchField;