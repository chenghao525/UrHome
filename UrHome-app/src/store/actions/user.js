export const SET_OPTIONS = "SET_OPTIONS";

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
