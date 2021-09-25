import { useEffect, useState } from "react";
import style from "./comment.module.scss";

export default function Comment({ data, handleDelete, handleSaveComment }) {
  const [deleted, setdeleted] = useState(false);
  const [body, setbody] = useState(false);
  const [edit, setedit] = useState(false);

  useEffect(() => {
    setbody(data.body);
  }, []);
  return deleted ? null : (
    <div className={style.comment}>
      <p>{data.name}</p>
      <p>{data.email}</p>
      {edit ? (
        <textarea
          onChange={(e) => {
            setbody(e.target.value);
          }}
          value={body}
        />
      ) : (
        <p>{body}</p>
      )}
      {edit ? (
        <div>
          <button
            onClick={() => {
              setbody(data.body);
              setedit(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              handleSaveComment(data.id);
              setedit(false);
            }}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={() => {
              setedit(true);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleDelete(data.id);
              setdeleted(true);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
