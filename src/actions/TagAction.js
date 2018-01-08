export const pushTag= (id) => {
  return {
    type: "PUSH_TAG",
    id,
  }
}
export const popTag = (id) => {
  return {
    type: "POP_TAG",
    id,
  }
}