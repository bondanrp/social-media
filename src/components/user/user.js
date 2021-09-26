import styles from "./user.module.scss";
import qs from "qs";
import { Link } from "react-router-dom";
import { getInitials } from "../../helper/function";

export default function User({ data }) {
  return (
    <Link
      className={styles.user}
      key={`${data.username + data.id}`}
      to={`/user?${qs.stringify({ id: data.id })}`}
    >
      {getInitials(data.name)}
      <span>{data.name}</span>
      <span>@{data.username}</span>
    </Link>
  );
}
