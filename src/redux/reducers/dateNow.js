import { GET_DATE } from "../constants";

const dateNow = (state, { type, payload }) => {
  const date = new Date();
  const currentMonth =
    date.getMonth() < 10 ? `0${+date.getMonth() + 1}` : +date.getMonth() + 1;
  const formDate = `${date.getFullYear()}-${currentMonth}-${date.getDate()}`;

  switch (type) {
    case GET_DATE:
      return payload;
    default:
      return formDate;
  }
};

export default dateNow;
