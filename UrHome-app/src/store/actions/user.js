export const SET_OPTIONS = "SET_OPTIONS";
export const SET_FACILITY_TYPES = "SET_FACILITY_TYPES";

export const setOptions = (data) => {
  return async (dispatch) => {
    dispatch({
      type: SET_OPTIONS,
      university: data.university,
      department: data.department,
      minutes: data.minutes,
      transportationType: data.transportationType,
      facilitiesTypes: data.facilityTypes,
    });
  };
};

export const setFacilityTypes = (data) => {
  return async (dispatch) => {
    dispatch({
      facilitiesTypes: data.facilityTypes,
    });
  };
};
