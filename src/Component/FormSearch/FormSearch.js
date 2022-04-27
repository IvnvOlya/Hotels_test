import "./FormSearch.css";
import {
  getDate,
  getCity,
  getDays,
  getHotels,
} from "../../redux/actions/actionCreater";

import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

export default function FormSearch() {
  const city = useSelector((store) => store?.changeCity);
  const date = useSelector((store) => store?.dateNow);
  const days = useSelector((store) => store?.changeDays);

  const [newCity, setNewCity] = useState(city);
  const [bookingDates, setBookingDates] = useState(date);
  const [newDays, setNewDays] = useState(days);

  const dispatch = useDispatch();

  const handleNew = (e) => {
    e.preventDefault();
    dispatch(getCity(newCity));
    dispatch(getDays(newDays));
    dispatch(getDate(bookingDates));
    dispatch(getHotels());
  };

  const handleChangeDate = (e) => {
    setBookingDates(e.target.value);
  };

  const handleChangeCity = (e) => {
    setNewCity(e.target.value);
  };

  const handleChangeDays = (e) => {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      let newValue = e.target.value.replace(/\D/g, "");
      newValue = newValue.replace(/(.{4})/g, "$1 ");
      e.target.value = newValue;
    }
    setNewDays(e.target.value);
  };

  return (
    <div className="FormSearch">
      <form className="Form Form_search">
        <label className="Form_label Form_label_location" htmlFor="location">
          Локация
        </label>
        <input
          onChange={handleChangeCity}
          className="Form_input FormSearch_input"
          type="location"
          name="location"
          value={newCity}
          required
        />
        <label className="Form_label Form_label_date" htmlFor="date">
          Дата заселения
        </label>
        <input
          className="Form_input FormSearch_input"
          type="date"
          name="date"
          onChange={handleChangeDate}
          value={bookingDates}
          required
        />
        <label className="Form_label Form_label_days" htmlFor="days">
          Количество дней
        </label>
        <input
          className="Form_input FormSearch_input"
          type="days"
          name="days"
          onChange={handleChangeDays}
          value={newDays}
          required
        />
        <button
          className="Form_button FormSearch_button"
          name="Form_button"
          onClick={handleNew}
        >
          Найти
        </button>
      </form>
    </div>
  );
}
