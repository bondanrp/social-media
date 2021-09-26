import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { getInitials } from "../../helper/function";
import styles from "./inputPost.module.scss";

export default function InputPost({
  handleSubmit,
  err,
  seterr,
  handleChange,
  state,
}) {
  const auth = useSelector((state) => state.reducers.auth);

  return (
    <div className={styles.inputPost}>
      <p className="name-combo">
        {getInitials(auth.name)}
        <span>{auth.name} </span>
        <span>@{auth.username}</span>
      </p>
      <input
        placeholder="Title"
        id="title"
        value={state.title}
        onChange={handleChange}
      />
      <textarea
        placeholder="Write something..."
        id="body"
        value={state.body}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>
        POST <FontAwesomeIcon icon={faPaperPlane} />
      </button>
      {err ? (
        <div onClick={() => seterr("")} className="errmsg">
          {err}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
