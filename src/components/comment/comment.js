import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "./comment.module.scss";

export default function Comment({ data, handleDelete, handleSaveComment }) {
  const auth = useSelector((state) => state.reducers.auth);
  const [deleted, setdeleted] = useState(false);
  const [body, setbody] = useState(false);
  const [edit, setedit] = useState(false);

  useEffect(() => {
    setbody(data.body);
  }, []);
  return deleted ? null : (
    <div className={styles.comment}>
      <div className={styles.top}>
        <div>
          <p>{data.name}</p>
          <p>{data.email}</p>
        </div>
        {!edit && auth ? (
          <div className={styles.editDelBut}>
            <button
              onClick={() => {
                setedit(true);
              }}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              onClick={() => {
                handleDelete(data.id);
                setdeleted(true);
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {edit ? (
        <div className={styles.editMode}>
          <textarea
            onChange={(e) => {
              setbody(e.target.value);
            }}
            value={body}
          />
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
        <p>{body}</p>
      )}
    </div>
  );
}
