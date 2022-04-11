import "./HotelItem.css";
import image from "../../img/house.png";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  countFavorite,
  countMinus,
} from "../../redux/actions/actionCreater";

const HotelItem = ({ hotels }) => {
  const dispatch = useDispatch();

  const getDate = (state) => state.dateNow;
  const getDay = (state) => state.changeDays;

  const dateNow = useSelector(getDate);
  const day = useSelector(getDay);

  const handleAdd = (e) => {
    e.preventDefault();
    const t = e.target;
    if (t.hasAttribute("data-key")) {
      dispatch(addFavorite(t.getAttribute("data-key")));
    }
    if (t.classList.contains("active")) {
      t.classList.remove("active");
      dispatch(countMinus());
    } else {
      t.classList.add("active");
      dispatch(countFavorite());
    }
  };

  return (
    <div>
      <ul className="HotelItem_list" onClick={handleAdd}>
        {hotels.map(({ priceAvg, hotelName, stars, hotelId }) => (
          <li key={hotelId} className="HotelItem_list_item">
            <div className="HotelItem_list_item_one">
              <div className="HotelItem_list_img">
                <img src={image} alt="" />
              </div>
              <div className="HotelItem_block_two">
                <div className="HotelItem_heading">
                  <h2 className="HotelItem_list_item_head">{hotelName}</h2>
                </div>
                <div className="HotelItem_block_date">
                  <p className="HotelItem_list_item_date">{dateNow} -</p>
                  <p className="HotelItem_list_item_day">{day} день</p>
                </div>
                <div>
                  <img
                    // src="img/4stars.png"
                    alt="Рейтинг отеля"
                    className="stars"
                  />{" "}
                  {stars}
                </div>
              </div>
            </div>
            <div>
              <button className="HotelItem_svg">
                <svg
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    data-key={hotelId}
                    d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
                    fill="white"
                    stroke="#C4C4C4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <p className="HotelItem_price">
                Price: <strong className="place_price">{priceAvg} Р </strong>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelItem;