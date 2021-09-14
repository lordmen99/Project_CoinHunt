const initState = {
  email: null,
  password: null
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        user: action.payload.user,
      };
    case "SET_PASSWORD_USER":
      return {
        ...state,
        password: action.payload.password,
      };
    default:
      return state;
  }
};