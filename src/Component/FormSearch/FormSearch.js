import "./FormSearch.css";
import { getDate, getCity, getDays } from "../../redux/actions/actionCreater";

import { useSelector, useDispatch } from "react-redux";
import { getHotels } from "../../redux/actions/actionCreater";

export default function FormSearch() {
  const date = useSelector((store) => store?.dateNow);
  const city = useSelector((store) => store?.changeCity);
  const days = useSelector((store) => store?.changeDays);

  const dispatch = useDispatch();

  const handleNew = (e) => {
    e.preventDefault();
    dispatch(getHotels()); 
  };

  const handleDate = (e) => {
    dispatch(getDate(e.target.value));
  };
  const handleChangeCity = (e) => {
    dispatch(getCity(e.target.value));
  };
  const handleChangeDays = (e) => {
    if (e.keyCode !== 8 && e.keyCode !== 46) {
      let newValue = e.target.value.replace(/\D/g, "");
      newValue = newValue.replace(/(.{4})/g, "$1 ");
      e.target.value = newValue;
    }
    dispatch(getDays(e.target.value));
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
          value={city}
          required
        />
        <label className="Form_label Form_label_date" htmlFor="date">
          Дата заселения
        </label>
        <input
          className="Form_input FormSearch_input"
          type="date"
          name="date"
          onChange={handleDate}
          value={date}
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
          value={days}
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
