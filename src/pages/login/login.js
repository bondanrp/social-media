import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

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
    <div>
      <p>Name</p>
      <input onChange={handleChange} id="name" value={state.name} />
      <p>username</p>
      @<input onChange={handleChange} id="username" value={state.username} />
      <p>email</p>
      <input onChange={handleChange} id="email" value={state.email} />
      {err ? <p>{err}</p> : ""}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
