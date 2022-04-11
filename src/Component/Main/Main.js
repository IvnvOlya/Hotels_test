import "./Main.css";
import AuthorizationPage from "../AuthorizationPage/AuthorizationPage";

export default function Main() {
  return (
    <div className="Main">
      <div className="Main-overlay">
        <AuthorizationPage />
      </div>
    </div>
  );
}
