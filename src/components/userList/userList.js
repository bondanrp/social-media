import { User } from "../components";

export default function UserList({ data }) {
  return (
    <div>
      {data.map((user) => {
        return <User click={true} key={`user${user.id}`} data={user} />;
      })}
    </div>
  );
}
