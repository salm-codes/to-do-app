const filterReducer = (state = "All", action: any = {}) => {
  if (action.type === "FILTER") {
    return (state = action.payload.filter);
  }
  return state;
};

export default filterReducer;
