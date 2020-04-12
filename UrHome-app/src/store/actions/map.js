export const SET_FACILITIES = "SET_FACILITIES";
export const SET_NEIGHBORHOODS = "SET_NEIGHBORHOODS";
const ServerURL = "http://localhost:8080";

// TODO: wait backend to specify this
const setPacilitiesURL = ServerURL + "/facilities";
const setNeighborhoodsURL = ServerURL + "/neighborhoods";
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
const dummyNeighborhoods = [{
  name:'neighborhood1',
  price:'1200',
  location:{
    latitude:'39.3266',
    longitude:'-76.6205'
  }
},{
  name:'neighborhood2',
  price:'800',
  location:{
    latitude:'39.3366',
    longitude:'-76.6205'
  }
}]

export const setFacilities = () => {
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

export const setNeighborhoods = () => {
  return async (dispatch, getState) => {
    // TODO: make http request
    // const response = await fetch(setPacilitiesURL, requestOptions);
    // if (!response.ok) {
    //   console.log('response not ok');
    // }
    // const resData = await Response.json();
    const resData = dummyNeighborhoods;
    dispatch({
      type: SET_NEIGHBORHOODS,
      neighborhoods: resData,
    });
  };
};