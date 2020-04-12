import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import mapReducer from './store/reducers/map';
import apartmentsReducer from './store/reducers/apartments'

const rootReducer = combineReducers({
  map: mapReducer,
  apartments: apartmentsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
