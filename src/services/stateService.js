export const deleteList = (e) => {
  e.preventDefault();
  let id =  e.target.id;
  axios.delete('todo/'+id).then(
    
  )
}