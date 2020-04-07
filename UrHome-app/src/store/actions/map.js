export const SET_FACILITIES = "SET_FACILITIES";
const ServerURL = "http://localhost:8080";

// TODO: wait backend to specify this
const setPacilitiesURL = ServerURL + "/facilities";
const dummyFacilitiesData = [{
  location:{
    latitude:'39.3266',
    longitude:'-76.6205'
  }
},{
  location:{
    latitude:'39.3366',
    longitude:'-76.6205'
  }
}]

export const set_facilities = () => {
  return async (dispatch, getState) => {
    // TODO: make http request
    // const response = await fetch(setPacilitiesURL, requestOptions);
    // if (!response.ok) {
    //   console.log('response not ok');
    // }
    // const resData = await Response.json();
    const resData = dummyFacilitiesData;
    dispatch({
      type: SET_FACILITIES,
      facilities: resData,
    });
  };
};
