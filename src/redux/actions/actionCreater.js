import {
  GET_DATE,
  GET_CITY,
  GET_HOTELS,
  SET_HOTELS,
  GET_DAYS,
  COUNT_FAVORITE,
  COUNT_MINUS,
  ADD_FAVORITE,
} from "../constants";


export const getDate = (payload) => ({
  type: GET_DATE,
  payload,
});

export const getCity = (payload) => ({
  type: GET_CITY,
  payload,
});

export const getDays = (payload) => ({
  type: GET_DAYS,
  payload,
});

export const getHotels = () => ({
  type: GET_HOTELS,
});

export const setHotels = (payload) => ({
  type: SET_HOTELS,
  payload,
});

export const countFavorite = () => ({
  type: COUNT_FAVORITE,
});
export const countMinus = () => ({
  type: COUNT_MINUS,
});

export const addFavorite = (payload) => ({
  type: ADD_FAVORITE,
  payload,
});
