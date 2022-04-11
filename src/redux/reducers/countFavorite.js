import { COUNT_FAVORITE, COUNT_MINUS } from "../constants";

const counter = (state = { count: 0 }, { type }) => {
  switch (type) {
    case COUNT_FAVORITE:
      return { ...state, count: state.count + 1 };
    case COUNT_MINUS:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter;
