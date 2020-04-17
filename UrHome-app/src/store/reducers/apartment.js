import { SET_NEIGHBORHOODS, SET_APARTMENTS } from "../actions/apartment";

const initialState = {
  apartments: [
    {
      type: "Townhouse for rent",
      bedsNum: "3bds",
      price: 995,
      image: "https://photos.zillowstatic.com/p_e/ISr9wklmtkf5du0000000000.jpg",
      address: "2945 Walbrook Ave, Baltimore, MD 21216",
      location: { lat: 39.3100106, lng: -76.667091 },
      neighborhood: "Walbrook",
    },
  ],
  neighborhoods: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_APARTMENTS:
      return {
        ...state,
        apartments: action.apartments,
      };
    case SET_NEIGHBORHOODS:
      return {
        ...state,
        neighborhoods: action.neighborhoods,
      };
    default:
      return state;
  }
};
