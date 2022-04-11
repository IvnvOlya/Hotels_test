import { ADD_FAVORITE } from "../constants";

const initialState = {
  favorite: [],
};

const add = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return {
        favorite: [...state.favorite, payload],
      };
    default:
      return state;
  }
};

export default add;
