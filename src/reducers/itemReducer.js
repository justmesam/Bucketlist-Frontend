import _ from "lodash";

const initial_state = {
  allItems: [],
  singleItem : null,
};

export default (state=initial_state, action) => {
  switch (action.type) {
  case "GET_BUCKETLIST_ITEMS_FULFILLED":
    return{
      ...state,
      allItems: action.payload.data
    };
  case "GET_ONE_BUCKETLIST_ITEM_FULFILLED":
    return {
      ...state,
      singleItem: action.payload.data
    };
  case "POST_BUCKETLIST_ITEMS_FULFILLED":
    return {
      ...state,
      allItems: _.concat(state.allItems, action.payload.data)
    };
  case "EDIT_BUCKETLIST_ITEMS_FULFILLED":
    return {
      ...state,
      allItems : _.unionBy([action.payload.data], state.allItems, "id")
    };
  case "DELETE_BUCKETLIST_ITEMS_FULFILLED":{
    const itemId = action.payload.data.item;
    const items = state.allItems;
    const filtereditems = items.filter(
      item => item.id !== itemId
    );
    return {
      ...state,
      allItems: filtereditems,
    };
  }
  default:
    return state;

  }
};
