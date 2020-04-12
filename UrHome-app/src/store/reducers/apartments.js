import {SET_NEIGHBORHOODS, SET_APARTMENTS} from '../actions/apartments'

const initialState = {
  apartments: null,
  neighborhoods: null,
};

export default (state = initialState, action) => {
  switch (action.type){
    case SET_APARTMENTS:
      return {
        ...state,
        apartments:action.apartments
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