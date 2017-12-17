import React, { Component } from 'react';
import SearchField from "./searchField";
import TodoLists from './todoLists';

let todoLists =[{
    id:1,
    task: 'task1',
    details: "to add books",
},
  {
    id:2,
    task: 'task2',
    details: "to add movies",
  },
  {
    id: 3,
    task: 'task3',
    details: "to add todos",
  }];
class MainWrapper extends Component {

  render() {
    return (
        <div className="mainWrapper">
          <TodoLists todoLists = {todoLists}/>
          <SearchField todoLists = {todoLists}/>
      </div>
    );
  }
}

export default MainWrapper;
