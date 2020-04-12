import {SET_NEIGHBORHOODS, SET_FACILITIES} from '../actions/map'

const initialState = {
  facilities: null
};

export default (state = initialState, action) => {
  switch (action.type){
    case SET_FACILITIES:
      return {
        ...state,
        facilities:action.facilities
      };
    case SET_NEIGHBORHOODS:
      return {
        ...state,
        neighborhoods: action.neighborhoods
      }
    default:
      return state;
  }
};