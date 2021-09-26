import qs from "qs";
import { Link } from "react-router-dom";

export function getUser(users, userId) {
  return users.map((user) => {
    if (user.id === userId) {
      return (
        <Link
          key={`${user.username + user.id}`}
          to={`/user?${qs.stringify({ id: user.id })}`}
          className="name-combo"
        >
          {getInitials(user.name)}
          <span>{user.name} </span>
          <span>@{user.username}</span>
        </Link>
      );
    }
  });
}

export function getInitials(name) {
  if (name) {
    let splitted = name.split(" ");
    let initials = splitted
      .map(
        (val, i) => (i == 0 || i == splitted.length - 1) && val[0].toUpperCase()
      )
      .filter((val) => val)
      .join("");

    return (
      <i className="dp">
        <span>{initials}</span>
      </i>
    );
  } else {
    return "";
  }
}
