import { ADD_FAVORITE } from "../constants";

const initialState = {
  favorite: [],
};

const add = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      const existFavoriteHotel = state.favorite.findIndex(
        ({ hotelId: isExistHotelId }) => isExistHotelId === payload.hotelId
      );
      if (existFavoriteHotel !== -1) {
        state.favorite.splice(existFavoriteHotel, 1);
      } else {
        const copyHotel = Object.assign({}, payload);
        state.favorite.push(copyHotel);
      }
      return {
        favorite: [...state.favorite],
      };
    default:
      return state;
  }
};

export default add;
