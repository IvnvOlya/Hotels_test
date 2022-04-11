import "./HotelNavbar.css";
import imageOut from "../../img/Out.png";

import { useNavigate } from "react-router-dom";

export default function HotelNavbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("session");
    navigate("/");
    //для настоящих приложений требуется проверять в Router наличие session, чтобы исключить возможность перехода по прямым ссылкам на страницы требующие авторизации
  };

  return (
    <div className="HotelNavbar">
      <h1 className="HotelNavbar_heading">Simple Hotel Check</h1>
      <button onClick={logout} className="HotelNavbar_button">
        Выход
        <img src={imageOut} alt="" className="HotelNavbar_img"/>
      </button>
    </div>
  );
}
