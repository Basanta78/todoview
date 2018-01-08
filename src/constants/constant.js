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

 }
 export const AUTHSTATE = {
   email: "",
   password: "",
   isAuthenticated: localStorage.getItem('isAuthenticated'),
   didInvalidate: false,
   name: "",
 }
