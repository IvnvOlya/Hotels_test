import "./Favorites.css";
import FavoritesHotels from "../FavoritesHotels/FavoritesHotels";
import { useSelector } from "react-redux";

export default function Favorites() {
  const newHotels = (state) => state.hotels.newHotels;
  const hotel = useSelector(newHotels);

  return (
    <div className="Favorites">
      <h1 className="Favorites_heading">Избранное</h1>
      <FavoritesHotels hotels={hotel} />
    </div>
  );
}
