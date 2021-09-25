export function reducers(state = { users: [], auth: "" }, action) {
  switch (action.type) {
    case "USERS":
      return { ...state, users: action.payload };
    case "LOGIN":
      return { ...state, auth: action.payload };
    default:
      return state;
  }
}
