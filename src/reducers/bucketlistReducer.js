import _ from "lodash";

const initial_state = {
  bucketlists: [],
  singleBucketlist : null,
};

export default (state=initial_state, action) => {
  switch (action.type) {
  case "GET_BUCKETLISTS_FULFILLED":
    return{
      ...state,
      singleBucketlist:null,
      bucketlists: action.payload.data,
    };
  case "GET_ONE_BUCKETLIST_FULFILLED":
    return {
      ...state,
      singleBucketlist: action.payload.data
    };
  case "SEARCH_BUCKETLIST_FULFILLED":
    return {
      ...state,
      searchedBucketlist: action.payload.data
    };
  case "POST_BUCKETLIST_FULFILLED":
    return {
      ...state,
      singleBucketlist:null,
      bucketlists: _.concat(state.bucketlists, action.payload.data)
    };
  case "EDIT_BUCKETLIST_FULFILLED":
    return {
      ...state,
      singleBucketlist:null,
      bucketlists : _.unionBy([action.payload.data], state.bucketlists, "id")
    };
  case "DELETE_BUCKETLIST_FULFILLED":
    const bucketlistid = action.payload.data.bucketlist;
    const allBuckets = state.bucketlists;
    const filteredBuckets = allBuckets.filter(
      bucketlist => bucketlist.id !== bucketlistid
    );
    return {
      ...state,
      bucketlists: filteredBuckets,
      singleBucketlist:null
    };
  default:
    return state;
  }
};
