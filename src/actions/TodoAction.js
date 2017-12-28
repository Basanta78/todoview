
export const startDelete = () => {
  return {
    type: "DELETE_START",
  }
}
export const onDeleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    id,
  }
}
export const errorDelete  = (err) => {
  return {
    type: "DELETE_ERROR",
    err: err,
  }
}