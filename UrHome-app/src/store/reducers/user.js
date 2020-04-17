import { SET_OPTIONS, SET_FACILITY_TYPES } from "../actions/user";

const initialState = {
  university: null,
  department: null,
  minutes: null,
  transportationTypes: [],
  facilityTypes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return {
        ...state,
        university: action.university,
        department: action.department,
        minutes: action.minutes,
        transportationTypes: action.transportationTypes,
        facilityTypes: action.facilityTypes,
      };
    case SET_FACILITY_TYPES:
      return {
        ...state,
        facilityTypes: action.facilityTypes,
      };
    default:
      return state;
  }
};
