import { SET_OPTIONS } from "../actions/user";

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
        university: action.university,
        department: action.department,
        minutes: action.minutes,
        transportationTypes: action.transportationTypes,
        facilityTypes: action.facilityTypes,
      };
    default:
      return state;
  }
};
