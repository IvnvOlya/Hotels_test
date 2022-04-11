import axios from "axios";

export const getHotels = async (info) => {
  const getCheckOut = function () {
    const date = new Date(info.dateNew);
    date.setDate(date.getDate() + +info.day);
    return date;
  };

  const date = new Date(getCheckOut());
  const currentMonth =
    date.getMonth() < 10 ? `0${+date.getMonth() + 1}` : +date.getMonth() + 1;
  const checkOut = `${date.getFullYear()}-${currentMonth}-${date.getDate()}`;

  const apiURL = `http://engine.hotellook.com/api/v2/cache.json?location=${info.city}&currency=rub&checkIn=${info.dateNew}&checkOut=${checkOut}&limit=5`;

  const response = await axios.get(apiURL);
  return response;
};
