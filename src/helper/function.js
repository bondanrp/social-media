import qs from "qs";
import { Link } from "react-router-dom";

export function getUser(users, userId) {
  return users.map((user) => {
    if (user.id === userId) {
      return (
        <Link
          key={`${user.username + user.id}`}
          to={`/user?${qs.stringify({ id: user.id })}`}
        >
          {`${user.name} @${user.username}`}
        </Link>
      );
    }
  });
}
