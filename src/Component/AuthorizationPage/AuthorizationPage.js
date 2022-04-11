import "./AuthorizationPage.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { authUsers } from "../../auth";

export default function AuthorizationPage() {
  const navigate = useNavigate();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  const [loginErrors, setLoginErrors] = useState("Введите логин");
  const [passwordErrors, setPasswordErrors] = useState("Введите пароль");
  const [errorLogin, setErrorLogin] = useState("");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (loginErrors || passwordErrors) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginErrors, passwordErrors]);

  const loginHandler = (e) => {
    setLogin(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setLoginErrors("Некорректный логин");
    } else {
      setLoginErrors("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordErrors("Некорректный пароль");
    } else {
      setPasswordErrors("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "login":
        setLoginDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  const auth = (e) => {
    e.preventDefault();
    const checkAuth = authUsers.find(
      (item) => item.login === login && item.password === password
    );
    if (checkAuth) {
      localStorage.setItem("session", "success auth");
      navigate("/hotels");
    } else {
      setErrorLogin("Неправильный логин или пароль");
    }
  };

  return (
    <div className="AuthorizationPage">
      <form className="Form" onSubmit={auth}>
        <h1 className="Form_head">Simple Hotel Check</h1>
        <label className="Form_label" htmlFor="login">
          Логин
        </label>
        {loginDirty && loginErrors && (
          <div style={{ color: "red", fontSize: "8px" }}>{loginErrors}</div>
        )}
        <input
          className="Form_input"
          type="login"
          name="login"
          placeholder="Введите Ваш Логин"
          value={login}
          onBlur={blurHandler}
          onChange={(e) => loginHandler(e)}
          required
        />
        <label className="Form_label" htmlFor="password">
          Пароль
        </label>
        {passwordDirty && passwordErrors && (
          <div style={{ color: "red", fontSize: "8px" }}>{passwordErrors}</div>
        )}

        <input
          className="Form_input margin_bottom"
          type="password"
          name="password"
          placeholder="Введите пароль"
          value={password}
          onChange={(e) => passwordHandler(e)}
          onBlur={blurHandler}
          autoComplete="on"
          required
        />
        <button
          disabled={!formValid}
          type="submit"
          name="Form_button"
          className="Form_button"
        >
          {" "}
          Войти
        </button>
        {errorLogin && (
          <div style={{ color: "red", fontSize: "8px" }}>{errorLogin}</div>
        )}
      </form>
    </div>
  );
}
