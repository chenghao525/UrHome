import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import mapReducer from "./store/reducers/map";
import apartmentsReducer from "./store/reducers/apartments";
import userReducer from "./store/reducers/user";

const rootReducer = combineReducers({
  map: mapReducer,
  apartments: apartmentsReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
