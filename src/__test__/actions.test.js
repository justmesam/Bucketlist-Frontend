import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import moxios from "moxios";
import * as allAction from "../actions/authActions";
import instance from "../constants/axiosConfig";

const middleware = [ thunk, promiseMiddleware()];
const mockStore = configureMockStore(middleware);

describe("Auth Actions", () => {
  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
  it("REGISTER_FULFILLED is dispatched", () => {
    const requestData = {email: "test@test.com", password : "paswordtest"};
    const payload = {
      message: "You have been successfully registered",
      token_: "alongtoken",
      user : "test@test.com"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 201,
        response: payload,
      });
    });
    const expectedActions = ["REGISTER_PENDING", "REGISTER_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.registerUser(requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("LOGIN_FULFILLED is dispatched", () => {
    const requestData = {email: "test@test.com", password : "paswordtest"};
    const payload = {
      message: "Successful Login",
      token_: "alongtoken",
      user : "test@test.com"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 200,
        response: payload,
      });
    });
    const expectedActions = ["LOGIN_PENDING", "LOGIN_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.loginUser(requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("LOGOUT_FULFILLED is dispatched", () => {
    const payload = {
      "message" : "You have successfuly logged out"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 200,
        response: payload,
      });
    });
    const expectedActions = ["LOGOUT_PENDING", "LOGOUT_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.logoutUser()).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("CHANGE_PASSWORD_FULFILLED is dispatched", () => {
    const requestData = {old_password: "12345", new_password : "paswordtest", confirm_password : "paswordtest"};
    const payload = {
      "message" : "You have changed the password successfuly"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 200,
        response: payload,
      });
    });
    const expectedActions = ["CHANGE_PASSWORD_PENDING", "CHANGE_PASSWORD_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.changePassword(requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("DELETE_USER_FULFILLED is dispatched", () => {
    const requestData = { password : "paswordtest"};
    const payload = {
      "message" : "You have changed the password successfuly"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 200,
        response: payload,
      });
    });
    const expectedActions = ["DELETE_USER_PENDING", "DELETE_USER_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.deleteUser(requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
