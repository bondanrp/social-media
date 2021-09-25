import styles from "./user.module.scss";
import qs from "qs";
import { Link } from "react-router-dom";

export default function Post({ data }) {
  return (
    <div className={styles.post}>
      <Link
        key={`${data.username + data.id}`}
        to={`/user?${qs.stringify({ id: data.id })}`}
      >
        {`${data.name} @${data.username}`}
      </Link>
    </div>
  );
}
