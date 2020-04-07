import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import mapReducer from './store/reducers/map';

const rootReducer = combineReducers({
  map: mapReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
