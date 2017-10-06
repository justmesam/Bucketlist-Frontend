import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import moxios from "moxios";
import * as allAction from "../actions/bucketlistsActions";
import instance from "../constants/axiosConfig";

const middleware = [ thunk, promiseMiddleware()];
const mockStore = configureMockStore(middleware);

describe("Bucket Actions", () => {
  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.uninstall(instance);
  });
  it("GET_BUCKETLISTS_FULFILLED is dispatched", () => {
    const payload = [{
      date_created: "Wed, 23 Aug 2017 13:47:07 GMT",
      date_updated: "Wed, 23 Aug 2017 13:47:07 GMT",
      id: 1,
      intro: "Learn dancing salsa",
      owner: 1,
      title: "Dance"
    }];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 200,
        response: payload,
      });
    });
    const expectedActions = ["GET_BUCKETLISTS_PENDING", "GET_BUCKETLISTS_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.getBucketlists()).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("POST_BUCKETLIST_FULFILLED is dispatched", () => {
    const requestData = {
      title: "Dance",
      intro: "Learn dancing salsa"};
    const payload = {
      date_created: "Wed, 23 Aug 2017 13:47:07 GMT",
      date_updated: "Wed, 23 Aug 2017 13:47:07 GMT",
      id: 1,
      intro: "Learn dancing salsa",
      owner: 1,
      title: "Dance"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 201,
        response: payload,
      });
    });
    const expectedActions = ["POST_BUCKETLIST_PENDING", "POST_BUCKETLIST_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.postBucketlists(requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("GET_ONE_BUCKETLIST_FULFILLED is dispatched", () => {
    const requestData = 1;
    const payload = {
      date_created: "Wed, 23 Aug 2017 13:47:07 GMT",
      date_updated: "Wed, 23 Aug 2017 13:47:07 GMT",
      id: 1,
      intro: "Learn dancing salsa",
      owner: 1,
      title: "Dance"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 200,
        response: payload,
      });
    });
    const expectedActions = ["GET_ONE_BUCKETLIST_PENDING", "GET_ONE_BUCKETLIST_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.getOneBucketlist(requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("EDIT_BUCKETLIST_FULFILLED is dispatched", () => {
    const requestData = {};
    const payload = {
      date_created: "Wed, 23 Aug 2017 13:47:07 GMT",
      date_updated: "Wed, 23 Aug 2017 13:47:07 GMT",
      id: 1,
      intro: "Learn dancing salsa",
      owner: 1,
      title: "Dance"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 200,
        response: payload,
      });
    });
    const expectedActions = ["EDIT_BUCKETLIST_PENDING", "EDIT_BUCKETLIST_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.editBucketlists(1, requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("DELETE_BUCKETLIST_FULFILLED is dispatched", () => {
    const requestData = 1;
    const payload = {
      "message": "Bucketlist deleted"
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status : 200,
        response: payload,
      });
    });
    const expectedActions = ["DELETE_BUCKETLIST_PENDING", "DELETE_BUCKETLIST_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.deleteBucketlists(requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
