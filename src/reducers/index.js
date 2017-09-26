import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import ItemReducer from "./itemReducer";
import BucketlistReducer from "./bucketlistReducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  authentication: AuthReducer,
  form: formReducer,
  bucketlists: BucketlistReducer,
  items: ItemReducer,
});

export default rootReducer;
