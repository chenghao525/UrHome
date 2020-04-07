import {SET_FACILITIES} from '../actions/map'

const initialState = {
  facilities: null
};

export default (state = initialState, action) => {
  switch (action.type){
    case SET_FACILITIES:
      return {
        facilities:action.facilities
      };
    default:
      return state;
  }
};