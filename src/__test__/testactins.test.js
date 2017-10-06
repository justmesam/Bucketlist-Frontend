import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";
import moxios from "moxios";
import * as allAction from "../actions/itemsActions";
import instance from "../constants/axiosConfig";

const middleware = [ thunk, promiseMiddleware()];
const mockStore = configureMockStore(middleware);

describe("Bucket Actions", () => {
  beforeEach(() => {
    moxios.install(instance);
  });
  afterEach(() => {
    moxios.install(instance);
  });
  it("GET_BUCKETLIST_ITEMS_FULFILLED is dispatched", () => {
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
    const expectedActions = ["GET_BUCKETLIST_ITEMS_PENDING", "GET_BUCKETLIST_ITEMS_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.getBucketlistsItems(1)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("POST_BUCKETLISTS_ITEMS_FULFILLED is dispatched", () => {
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
    const expectedActions = ["POST_BUCKETLIST_ITEMS_PENDING", "POST_BUCKETLIST_ITEMS_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.postBucketlistsItems(1, requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("GET_ONE_BUCKETLISTS_ITEMS_FULFILLED is dispatched", () => {
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
    const expectedActions = ["GET_ONE_BUCKETLIST_ITEM_PENDING", "GET_ONE_BUCKETLIST_ITEM_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.getOneBucketlistItem(1, requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("EDIT_BUCKETLISTS_ITEMS_FULFILLED is dispatched", () => {
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
    const expectedActions = ["EDIT_BUCKETLIST_ITEMS_PENDING", "EDIT_BUCKETLIST_ITEMS_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.editBucketlistsItems(1, 1, requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
  it("DELETE_BUCKETLISTS_ITEMS_FULFILLED is dispatched", () => {
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
    const expectedActions = ["DELETE_BUCKETLIST_ITEMS_PENDING", "DELETE_BUCKETLIST_ITEMS_FULFILLED"];
    const store = mockStore({});
    return store.dispatch(allAction.deleteBucketlistsItems(1, requestData)).then(() => {
      const actionTypes = store.getActions().map(action => action.type);
      expect(actionTypes).toEqual(expectedActions);
    });
  });
});
