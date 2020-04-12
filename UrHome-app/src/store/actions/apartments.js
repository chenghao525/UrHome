import APARTMENTS from "../../data/apartment_data";

export const SET_APARTMENTS = "SET_APARTMENTS";
export const SET_NEIGHBORHOODS = "SET_NEIGHBORHOODS";

// TODO: wait backend to specify this
// const ServerURL = "http://localhost:8080";
// const setPacilitiesURL = ServerURL + "/facilities";
// const setNeighborhoodsURL = ServerURL + "/neighborhoods";

// TODO: read from data
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

export const setApartments = () => {
  return async (dispatch, getState) => {
    // TODO: make http request
    // const response = await fetch(setPacilitiesURL, requestOptions);
    // if (!response.ok) {
    //   console.log('response not ok');
    // }
    // const resData = await Response.json();
    const resData = APARTMENTS;
    dispatch({
      type: SET_APARTMENTS,
      apartments: resData,
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