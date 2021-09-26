import { User } from "../components";
import styles from "./userList.module.scss";

export default function UserList({ data }) {
  return (
    <div className={styles.userList}>
      {data.map((user) => {
        return <User click={true} key={`user${user.id}`} data={user} />;
      })}
    </div>
  );
}
