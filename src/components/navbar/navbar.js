import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const auth = useSelector((state) => state.reducers.auth);

  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.clear();
    dispatch({
      type: "LOGIN",
      payload: "",
    });
  };
  return (
    <div className={styles.navbar}>
      <div>
        <div>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/explore">Explore</NavLink>
          <NavLink to="/users">Users</NavLink>
        </div>
        <div>
          {auth ? (
            <React.Fragment>
              {auth.name} @{auth.username}
              <button onClick={handleLogout}>Logout</button>
            </React.Fragment>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
