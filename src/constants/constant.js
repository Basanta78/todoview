export const INITIALSTATE = {
   isFetching: false, 
   isEditing: false,
   didInvalidate: false,
   isDeleting: false,
  todoList: [],
 }
 export const AUTHSTATE = {
   email: "",
   password: "",
   isAuthenticated: localStorage.getItem('isAuthenticated'),
   didInvalidate: false,
 }