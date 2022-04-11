import { combineReducers } from "redux";
import dateNow from "./dateNow";
import changeCity from "./changeCity";
import changeDays from "./changeDays";
import hotels from "./hotels";
import countFavorite from "./countFavorite";
import addFavorite from "./addFavorite";

const reducer = combineReducers({
  dateNow,
  changeCity,
  changeDays,
  hotels,
  countFavorite,
  addFavorite,
});

export default reducer;
