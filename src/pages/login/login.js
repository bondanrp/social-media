import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styles from "./login.module.scss";

export function Login() {
  const history = useHistory();
  const [err, seterr] = useState("");
  const [state, setstate] = useState({
    name: "",
    username: "",
    email: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setstate({
      ...state,
      [e.target.id]: e.target.value,
    });
  };
  const handleLogin = () => {
    if (state.name && state.username && state.email) {
      dispatch({
        type: "LOGIN",
        payload: state,
      });
      localStorage.setItem("login", JSON.stringify(state));
      history.goBack();
    } else {
      seterr("Mohon Lengkapi form diatas");
    }
  };

  return (
    <div className="container">
      <div className={styles.login}>
        <p>Name</p>
        <input
          placeholder="John Doe"
          onChange={handleChange}
          id="name"
          value={state.name}
        />
        <p>Username</p>
        <div>
          <span>@</span>
          <input
            placeholder="JohnDoe"
            onChange={handleChange}
            id="username"
            value={state.username}
          />
        </div>
        <p>email</p>
        <input
          placeholder="johndoe@123.com"
          onChange={handleChange}
          id="email"
          value={state.email}
        />
        {err ? (
          <p onClick={() => seterr("")} className="errmsg">
            {err}
          </p>
        ) : (
          ""
        )}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
