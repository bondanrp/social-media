import { useSelector } from "react-redux";
import { UserList } from "../../components/components";

export function Users() {
  const users = useSelector((state) => state.reducers.users);

  return (
    <div>
      <UserList data={users} />
    </div>
  );
}
