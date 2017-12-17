import React, { Component } from 'react';

class SearchField extends Component {
  constructor (props){
    super(props);
    this.state = {
      search: "",
      todoLists:props.todoLists
    };
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event){
    this.setState({
      search:event.target.value
    });
  }
  render() {

    return (
      <input type="text"
             placeholder="search"
             value={this.state.search}
             onChange={this.updateSearch}
      />
    );
  }
}

export default SearchField;
