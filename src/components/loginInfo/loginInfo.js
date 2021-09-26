import { Link } from "react-router-dom";
import styles from "./loginInfo.module.scss";

export default function LoginInfo(props) {
  return (
    <Link className={styles.loginInfo} to="/login">
      Login untuk menambahkan, mengedit dan menghapus post/komentar
    </Link>
  );
}
