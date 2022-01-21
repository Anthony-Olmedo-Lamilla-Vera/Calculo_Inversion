export const RedCalInv = (state = [], action) => {
  switch (action.type) {
    case "@recaudo/Anual":
      return state.push(...action.payload);
    default:
      return state;
  }
};
