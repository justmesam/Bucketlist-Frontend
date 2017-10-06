import authReducer from "../reducers/authReducer";

const initial_state = {
  token: null,
  authenticated: false
};

describe("Auth reducer", () => {
  it("CASE : REGISTER_FULFILLED", () => {
    const action = {
      type: "REGISTER_FULFILLED",
      payload : {
        data : {
          user: "tes@test.com",
          token_ : "token",
        }
      }
    }
    const expected = {
        token: "token",
        authenticated: true,
        user : "tes@test.com"
      };
    const newState = authReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : LOGIN_FULFILLED", () => {
    const action = {
      type: "LOGIN_FULFILLED",
      payload : {
        data : {
          user: "tes@test.com",
          token_ : "token",
        }
      }
    }
    const expected = {
        token: "token",
        authenticated: true,
        user : "tes@test.com"
      };
    const newState = authReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : CHANGE_PASSWORD_FULFILLED", () => {
    const action = {
      type: "CHANGE_PASSWORD_FULFILLED",
      payload : {
        data : {
          message: "You have changed the password succesfully"
        }
      }
    }
    const expected = {
      token: null,
      authenticated: false,
      message: "You have changed the password succesfully"
      };
    const newState = authReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : RESET_PASSWORD_FULFILLED", () => {
    const action = {
      type: "RESET_PASSWORD_FULFILLED",
      payload : {
        data : {
          message: "You have reset your password successfully"
        }
      }
    }
    const expected = {
      token: null,
      authenticated: false,
      message: "You have reset your password successfully"
      };
    const newState = authReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : DELETE_USER_FULFILLED", () => {
    const action = {
      type: "DELETE_USER_FULFILLED",
    }
    const expected = initial_state
    const newState = authReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : LOGOUT_FULFILLED", () => {
    const action = {
      type: "LOGOUT_FULFILLED",
    }
    const expected = initial_state
    const newState = authReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : LOGOUT_REJECTED", () => {
    const action = {
      type: "LOGOUT_REJECTED",
    }
    const expected = initial_state
    const newState = authReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
})
