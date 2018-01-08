import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getTodo, searchTodo } from '../actions/ActionCreator';
import { setSearchText,reorderItem } from '../actions/TodoAction';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';




const SearchField = ( props ) => {

  const handlePageClick= (data) =>{
    props.getTodo(data)
  }
    return (
      <div>
        <form>
          <div className="form-row">
              <input type="text"
                     placeholder="search"
                     value={props.state.searchText}
                     onChange={(e)=>props.handleSearchChange(e.target.value)}
              />
          </div>
        </form>

      <ul>
      {props.state.todoList.map((todoList,index) => {
        return (<ListItem todoList = {todoList}  reorderTodo = {props.reorderTodo} index ={index} key ={index}/>)
      })}
      </ul>
      <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                      //  breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={props.state.metadata.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
      </div>

    );
  }

const matchStatetoProps = (state) =>({state:state.todo})
const matchDispatchtoProps = (dispatch) => {
  return {
    handleSearchChange:(search) => {
      dispatch(setSearchText(search)),
      dispatch(searchTodo(search))
    },
    getTodo: (page) => {
      dispatch(getTodo(page.selected+1)) 
    },
    reorderTodo: (itemId, index) =>{
      dispatch(reorderItem(itemId, index))
    },
  }
}

const SearchFieldApp = connect(matchStatetoProps, matchDispatchtoProps)(SearchField)

export default DragDropContext(HTML5Backend)(SearchFieldApp);

 