import { GET_DAYS } from "../constants";

const changeDays = (state = 1, { type, payload }) => {
  switch (type) {
    case GET_DAYS:
      return payload;
    default:
      return state;
  }
};

export default changeDays;
