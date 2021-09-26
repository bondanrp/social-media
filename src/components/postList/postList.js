import { Post } from "../components";
import styles from "./postList.module.scss";

export default function PostList({ data }) {
  const odd = data.filter((v, i) => i % 2);
  const even = data.filter((v, i) => !(i % 2));
  return (
    <div className={styles.postList}>
      <div>
        {even.map((post) => {
          return (
            <Post
              fake={post.fake}
              click={true}
              key={`post${post.id}${post.key}`}
              data={post}
            />
          );
        })}
      </div>
      <div>
        {odd.map((post) => {
          return (
            <Post
              fake={post.fake}
              click={true}
              key={`post${post.id}${post.key}`}
              data={post}
            />
          );
        })}
      </div>
    </div>
  );
}
