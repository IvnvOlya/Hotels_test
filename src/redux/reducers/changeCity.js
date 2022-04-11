import { GET_CITY } from "../constants";

const changeCity = (state = "Moscow", { type, payload }) => {
  switch (type) {
    case GET_CITY:
      return payload;
    default:
      return state;
  }
};

export default changeCity;
