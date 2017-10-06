import itemReducer from "../reducers/itemReducer";

const initial_state = {
  allItems: [],
  singleItem : null,
};

describe("Items Reducer", () => {
  it("CASE : GET_BUCKETLIST_ITEMS_FULFILLED", () => {
    const action = {
      type: "GET_BUCKETLIST_ITEMS_FULFILLED",
      payload : {
        data : [{
          title: "test bucket item",
          intro : "test bucket item",
        }]
      }
    }
    const expected = {
      singleItem:null,
      allItems:[{
        title: "test bucket item",
        intro : "test bucket item",
      }]
      };
    const newState = itemReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : GET_ONE_BUCKETLIST_ITEM_FULFILLED", () => {
    const action = {
      type: "GET_ONE_BUCKETLIST_ITEM_FULFILLED",
      payload : {
        data : {
          title: "test bucket item",
          intro : "test bucket item",
        }
      }
    }
    const expected = {
      singleItem:{
        title: "test bucket item",
        intro : "test bucket item",
      },
      allItems:[]
      };
    const newState = itemReducer(initial_state, action)
    expect(newState).toEqual(expected)
  });
  it("CASE : POST_BUCKETLIST_ITEMS_FULFILLED", () => {
    const action = {
      type: "POST_BUCKETLIST_ITEMS_FULFILLED",
      payload : {
        data : {
          title: "test bucket item",
          intro : "test bucket item",
        }
      }
    }
    const expected = {
      singleItem:null,
      allItems:[{
        title: "test bucket item",
        intro : "test bucket item",
      },]
      };
    const newState = itemReducer(initial_state, action)
    expect(newState).toEqual(expected)
  })
  it("CASE : EDIT_BUCKETLIST_ITEMS_FULFILLED", () => {
    const action = {
      type: "EDIT_BUCKETLIST_ITEMS_FULFILLED",
      payload : {
        data : {
          title: "test bucket item",
          intro : "test bucket item",
        }
      }
    }
    const expected = {
      singleItem:null,
      allItems:[{
        title: "test bucket item",
        intro : "test bucket item",
      },]
      };
    const newState = itemReducer(initial_state, action)
    expect(newState).toEqual(expected)
  })
  it("CASE : DELETE_BUCKETLIST_ITEMS_FULFILLED", () => {
    const initialState = {
      allItems: [{
        title: "test bucket item",
        intro : "test bucket item",
        id: 1
      }],
      singleItem : null,
    };

    const action = {
      type: "DELETE_BUCKETLIST_ITEMS_FULFILLED",
      payload : {
        data : {
          bucketlist:1
        }
      }
    }
    const expected = {
      singleItem:null,
      allItems:[]
      };
    const newState = itemReducer(initial_state, action)
    expect(newState).toEqual(expected)
  })
});
