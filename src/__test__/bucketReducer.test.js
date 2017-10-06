import bucketReducer from "../reducers/bucketlistReducer";

const initial_state = {
  bucketlists: [],
  singleBucketlist : null,
};

describe("Bucketlists Reducer", () => {
  it("CASE : GET_BUCKETLISTS_FULFILLED", () => {
    const action = {
      type: "GET_BUCKETLISTS_FULFILLED",
      payload : {
        data : [{
          title: "test bucket",
          intro : "test bucket",
        }]
      }
    }
    const expected = {
      singleBucketlist:null,
      searched: false,
      paginated:false,
      bucketlists:[{
        title: "test bucket",
        intro : "test bucket",
      }]
      };
    const newState = bucketReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : GET_ONE_BUCKETLIST_FULFILLED", () => {
    const action = {
      type: "GET_ONE_BUCKETLIST_FULFILLED",
      payload : {
        data : {
          title: "test bucket",
          intro : "test bucket",
        }
      }
    }
    const expected = {
      singleBucketlist:{
        title: "test bucket",
        intro : "test bucket",
      },
      bucketlists:[]
      };
    const newState = bucketReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : POST_BUCKETLIST_FULFILLED", () => {
    const action = {
      type: "POST_BUCKETLIST_FULFILLED",
      payload : {
        data : {
          title: "test bucket",
          intro : "test bucket",
        }
      }
    }
    const expected = {
      singleBucketlist:null,
      paginated:false,
      bucketlists:[{
        title: "test bucket",
        intro : "test bucket",
      },]
      };
    const newState = bucketReducer(initial_state, action)
    expect(newState).toEqual(expected)
  })
  it("CASE : EDIT_BUCKETLIST_FULFILLED", () => {
    const action = {
      type: "EDIT_BUCKETLIST_FULFILLED",
      payload : {
        data : {
          title: "test bucket",
          intro : "test bucket",
        }
      }
    }
    const expected = {
      singleBucketlist:null,
      bucketlists:[{
        title: "test bucket",
        intro : "test bucket",
      },]
      };
    const newState = bucketReducer(initial_state, action)
    expect(newState).toEqual(expected)
  })
  it("CASE : DELETE_BUCKETLIST_FULFILLED", () => {
    const initialState = {
      bucketlists: [{
        title: "test bucket",
        intro : "test bucket",
        id: 1
      }],
      singleBucketlist : null,
    };

    const action = {
      type: "DELETE_BUCKETLIST_FULFILLED",
      payload : {
        data : {
          bucketlist:1
        }
      }
    }
    const expected = {
      singleBucketlist:null,
      bucketlists:[]
      };
    const newState = bucketReducer(initial_state, action)
    expect(newState).toEqual(expected)
  })
  it("CASE : PAGINATE_BUCKETLIST_FULFILLED", () => {
    const action = {
      type: "PAGINATE_BUCKETLIST_FULFILLED",
      payload : {
        data : {
          current_page:1,
          pages:1,
          next_page: "nextpage",
          previous_page:"prevpage",
          bucketlists:[{
            title: "test bucket",
            intro : "test bucket",
          }]
        }
      }
    }
    const expected = {
      singleBucketlist:null,
      searched: false,
      paginated:true,
      current:1,
      pages:1,
      nextPage: "nextpage",
      prevPage:"prevpage",
      bucketlists:[{
        title: "test bucket",
        intro : "test bucket",
      }]
      };
    const newState = bucketReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : SEARCH_BUCKETLIST_FULFILLED", () => {
    const action = {
      type: "SEARCH_BUCKETLIST_FULFILLED",
      payload : {
        data : {
          bucketlists: [{
          title: "test bucket",
          intro : "test bucket",
        }]
      }
    }}
    const expected = {
      singleBucketlist:null,
        bucketlists:[],
      searched: true,
      searchedBucketlist:[{
        title: "test bucket",
        intro : "test bucket",
      }]
      };
    const newState = bucketReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
});
