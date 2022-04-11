import { useSelector } from "react-redux";
import "./CountFavorites.css";

export default function CountFavorites() {
  const getCount = (state) => state.countFavorite.count;
  const countHotels = useSelector(getCount);

  return (
    <div className="CountFavorites">
      <div className="CountFavorites_heading">
         Добавлено в избранное: <strong>{countHotels} </strong>отеля(ей)
      </div>
      <div></div>
    </div>
  );
}
