import moment from 'moment';

export const INITIALSTATE = {
   isFetching: false, 
   isEditing: false,
   didInvalidate: false,
   isDeleting: false,
    todoList: [],
    tags: [],
    task: "",
   details: "",
   inputTags: [],
   isRegistered: false,
   metadata: {},
   editTaskId:null,
   searchText:null,
   date:moment()

 }
 export const AUTHSTATE = {
   email: "",
   password: "",
   isAuthenticated: localStorage.getItem('isAuthenticated'),
   didInvalidate: false,
   name: "",
 }
 export const DragTypes = {
  ITEM: "item"
};
