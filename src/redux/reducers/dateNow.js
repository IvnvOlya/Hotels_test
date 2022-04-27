import { GET_DATE } from "../constants";

const date = new Date();
const currentMonth =
  date.getMonth() < 10 ? `0${+date.getMonth() + 1}` : +date.getMonth() + 1;
const formDate = `${date.getFullYear()}-${currentMonth}-${date.getDate()}`;

const dateNow = (state = formDate, { type, payload }) => {
  switch (type) {
    case GET_DATE:
      return payload;
    default:
      return state;
  }
};

export default dateNow;
