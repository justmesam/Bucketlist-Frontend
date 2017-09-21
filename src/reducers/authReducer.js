
const initial_state = {
  token: null,
  authenticated: false
};

export default (state=initial_state, action) => {
  switch (action.type) {
    case 'REGISTER_FULFILLED':
      return {...state,
       token : action.payload.data.token_,
       authenticated:true};
   case 'LOGIN_FULFILLED':
     return {...state,
      token : action.payload.data.token_,
      authenticated:true};
  case 'LOGOUT_FULFILLED':
    return {...initial_state};
    default:
      return state;
  }
};
