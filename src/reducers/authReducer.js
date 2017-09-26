
const initial_state = {
  token: null,
  authenticated: false
};

export default (state=initial_state, action) => {
  switch (action.type) {
  case "REGISTER_FULFILLED":
    return {...state,
      token : action.payload.data.token_,
      authenticated:true,
      user: action.payload.data.user};
  case "LOGIN_FULFILLED":
    return {...state,
      token : action.payload.data.token_,
      authenticated:true,
      user: action.payload.data.user};
  case "CHANGE_PASSWORD_FULFILLED":
    return {...state,
      message : action.payload.data.message};
  case "RESET_PASSWORD_FULFILLED":
    return {...state,
      message : action.payload.data.message};
  case "LOGOUT_FULFILLED":
    return {...initial_state};
  default:
    return state;
  }
};
