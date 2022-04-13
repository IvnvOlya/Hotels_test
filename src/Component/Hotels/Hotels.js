import "./Hotels.css";
import imageArrow from "../../img/Arrow.png";

import HotelImage from "../HotelImage/HotelImage";
import HotelItem from "../HotelItem/HotelItem";
import CountFavorites from "../CountFavorites/CountFavorites";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getHotels } from "../../redux/actions/actionCreater";

export default function Hotels() {
  const newHotels = useSelector((store) => store?.hotels?.newHotels || []);

  const dispatch = useDispatch();

  const getCity = (state) => state.changeCity;
  const city = useSelector(getCity);

  let objDate = new Date();
  let today =
    objDate.toLocaleString("ru", { day: "numeric" }) +
    " " +
    objDate.toLocaleString("ru", { month: "long" }) +
    " " +
    objDate.toLocaleString("ru", { year: "numeric" });

  const handleNew = () => {
    dispatch(getHotels());
  };
  useEffect(() => {
    handleNew();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="Hotels">
      <div className="Hotels_nav">
        <div>
          <h1 className="Hotels_heading">Отели</h1>
          <img className="Hotels_arrow" src={imageArrow} alt="" />
          <h1 className="Hotels_heading">{city}</h1>
        </div>
        <div className="Hotels_date">{today}</div>
      </div>
      <div className="Hotels_img"></div>
      <HotelImage hotels={newHotels} />
      <CountFavorites />
      <HotelItem hotels={newHotels} />
    </div>
  );
}
