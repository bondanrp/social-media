import { Post } from "../components";

export default function PostList(props) {
  const { data } = props;

  return (
    <div>
      {data.map((post) => {
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
  );
}
