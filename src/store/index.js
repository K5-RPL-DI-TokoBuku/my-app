import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer, productReducer } from "./reducers";

const reducers = combineReducers({
  userReducer,
  productReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;