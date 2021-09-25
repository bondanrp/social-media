import { Link } from "react-router-dom";
import styles from "./loginInfo.module.scss";

export default function LoginInfo({ type }) {
  return (
    <Link className={styles.loginInfo} to="/login">
      Login untuk{" "}
      {type === "comment" ? "menambahkan komentar" : "membuat post baru"}
    </Link>
  );
}
