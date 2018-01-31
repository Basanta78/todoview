
export const startDelete = () => {
  return {
    type: "DELETE_START",
  }
}
export const onDeleteTodo = (id,index) => {
  return {
    type: "DELETE_TODO",
    id,
    index,
  }
}
export const errorDelete  = (err) => {
  return {
    type: "DELETE_ERROR",
    err: err,
  }
}
export const startEdit = () => {
  return {
    type: "EDIT_START",
  }
}
export const errorEdit = ( err ) => {
  return {
    type: "EDIT_ERROR",
    err: err,
  }
}
export const onSubmitEdit = () => {
  return {
    type: "EDIT_SUBMIT",
  }
}
export const editTask = ( index, task ) => {
  return {
    type: "EDIT_TASK",
    index,
    task,
  }
}
export const editDetails = (index, details ) => {
  return {
    type: "EDIT_DETAILS",
    index,
    details,
  }
}
export const setEditing = (taskId) => {
  return {
    type: "SET_EDIT",
    taskId,
  }
}
export const setMetadata = (metadata) => {
  return {
    type: "SET_METADATA",
    metadata,
  }
}
export const setSearchText = (search) => {
  return {
    type: "SET_SEARCHTEXT",
    search,
  }
}
export const reorderItem = (id, index) => {
  return {
    type: "REORDER_ITEM",
    id,
    index,
  }
}
export const handleDateChange = (date) => {
  return {
    type: "CHANGE_DATE",
    date,
  }
}
