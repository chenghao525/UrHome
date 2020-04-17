import Apartment_data from "../../data/Apartment_data";
import Neighborhood_data from "../../data/Neighborhood_data";

export const SET_APARTMENTS = "SET_APARTMENTS";
export const SET_NEIGHBORHOODS = "SET_NEIGHBORHOODS";

// const ServerURL = "http://localhost:8080";
// const setPacilitiesURL = ServerURL + "/facilities";
// const setNeighborhoodsURL = ServerURL + "/neighborhoods";

// TODO: read from data

export const setApartments = () => {
  return async (dispatch, getState) => {
    // TODO: make http request
    // const response = await fetch(setPacilitiesURL, requestOptions);
    // if (!response.ok) {
    //   console.log('response not ok');
    // }
    // const resData = await Response.json();
    const resData = Apartment_data;
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
    const resData = Neighborhood_data;
    dispatch({
      type: SET_NEIGHBORHOODS,
      neighborhoods: resData,
    });
  };
};