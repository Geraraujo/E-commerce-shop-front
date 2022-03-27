function cart(state = null, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return action.payload;
    case "REMOVE_ITEM":
      return action.payload;
    default:
      return state;
  }
}

export default cart;
