import { Comment } from "../components";

export default function CommentList({ data, handleDelete, handleSaveComment }) {
  return (
    <div>
      {data.map((comment) => {
        return (
          <Comment
            key={`commentId${comment.id}${comment.key}`}
            handleDelete={handleDelete}
            handleSaveComment={handleSaveComment}
            data={comment}
          />
        );
      })}
    </div>
  );
}
