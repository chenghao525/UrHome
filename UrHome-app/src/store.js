import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import mapReducer from "./store/reducers/map";
import apartmentReducer from "./store/reducers/apartment";
import userReducer from "./store/reducers/user";

const rootReducer = combineReducers({
  map: mapReducer,
  apartment: apartmentReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
