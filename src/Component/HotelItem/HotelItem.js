import "./HotelItem.css";
import FavoriteItem from "../FavoriteItem/FavoriteItem";
import image from "../../img/house.png";
import { useSelector } from "react-redux";

const HotelItem = ({ hotels }) => {
  const getDate = (state) => state.dateNow;
  const getDay = (state) => state.changeDays;

  const bookingDate = useSelector(getDate);
  const day = useSelector(getDay);

  return (
    <div>
      <ul className="HotelItem_list">
        {hotels.map(({ priceAvg, hotelName, stars, hotelId }) => (
          <FavoriteItem
            hotelId={hotelId}
            key={hotelId}
            hotelName={hotelName}
            image={image}
            stars={stars}
            priceHotel={priceAvg}
            bookingDate={bookingDate}
            day={day}
          />
        ))}
      </ul>
    </div>
  );
};

export default HotelItem;
