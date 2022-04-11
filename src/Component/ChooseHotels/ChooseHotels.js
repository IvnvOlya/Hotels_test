import "./ChooseHotels.css";
import FormSearch from "../FormSearch/FormSearch";
import Favorites from "../Favorites/Favorites";
import Hotels from "../Hotels/Hotels";
import HotelNavbar from "../HotelNavbar/HotelNavbar";

export default function ChooseHotels() {
  return (
    <div className="ChooseHotels">
      <HotelNavbar />
      <div className="ChooseHotels_items">
        <div>
          <FormSearch />
          <Favorites />
        </div>
        <Hotels />
      </div>
    </div>
  );
}
