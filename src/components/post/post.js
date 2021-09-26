import { useSelector } from "react-redux";
import styles from "./post.module.scss";
import qs from "qs";
import { Link } from "react-router-dom";
import { getInitials, getUser } from "../../helper/function";
import { LoginInfo } from "../components";
import { request } from "../../api/api";
import { useHistory } from "react-router";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faEdit,
  faPaperPlane,
  faReply,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function Post({
  state,
  data,
  click,
  handlePostComment,
  handleSave,
  handleChange,
  setstate,
  fake,
  errComment,
  seterrComment,
}) {
  const history = useHistory();
  const users = useSelector((state) => state.reducers.users);
  const auth = useSelector((state) => state.reducers.auth);
  const [deleted, setdeleted] = useState(false);
  const handleDelete = () => {
    request.delete.deletePost(data.id).then((res) => {
      history.push("/home");
    });
  };
  let link = `/post?${qs.stringify({
    id: data.id,
    f: fake,
    d: fake ? data : "",
  })}`;
  if (deleted) {
    return null;
  } else {
    return (
      <div className={`${styles.post} ${click ? "" : styles.alt}`}>
        <div>
          <div className={styles.top}>
            {fake ? (
              <p className="name-combo">
                {getInitials(auth.name)}
                <span>{auth.name} </span>
                <span>@{auth.username}</span>
              </p>
            ) : data.name ? (
              <p className="name-combo">
                {getInitials(data.name)}
                <span>{data.name} </span>
                <span>@{data.username}</span>
              </p>
            ) : (
              <p className={styles.username}>{getUser(users, data.userId)}</p>
            )}
            {state && state.edit ? (
              ""
            ) : click ? (
              auth ? (
                <div className={styles.editDelBut}>
                  <button
                    onClick={() => {
                      handleDelete(data.id);
                      setdeleted(true);
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              ) : (
                ""
              )
            ) : (
              <div className={styles.editDelBut}>
                <button
                  onClick={() => {
                    setstate({ ...state, edit: true });
                  }}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                {auth ? (
                  <button
                    onClick={() => {
                      handleDelete(data.id);
                      setdeleted(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
          {click ? (
            <React.Fragment>
              <Link to={link}>
                <p className={styles.title}>{data.title}</p>
                <p>{data.body}</p>
              </Link>
              <Link to={link} className={styles.commentsLink}>
                Comments <FontAwesomeIcon icon={faComment} />
              </Link>
            </React.Fragment>
          ) : (
            <div>
              {state && state.edit ? (
                <div className={styles.editDelInp}>
                  <div>
                    <input
                      id="inputTitle"
                      value={state.inputTitle}
                      onChange={handleChange}
                    />
                    <textarea
                      id="inputBody"
                      value={state.inputBody}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        setstate({ ...state, edit: false });
                      }}
                    >
                      Cancel
                    </button>
                    <button onClick={handleSave}>Save</button>
                  </div>
                </div>
              ) : (
                <div>
                  <p className={styles.title}>{data.title}</p>
                  <p>{data.body}</p>
                </div>
              )}
            </div>
          )}
        </div>
        {state && auth ? (
          <React.Fragment>
            <hr />
            <div className={styles.inputComment}>
              <div>
                <textarea
                  id="inputComment"
                  placeholder="Write your comment here..."
                  value={state.inputComment}
                  onChange={handleChange}
                />
                <button onClick={handlePostComment}>
                  REPLY <FontAwesomeIcon icon={faReply} />
                </button>
              </div>
              {errComment ? (
                <div
                  onClick={() => {
                    seterrComment("");
                  }}
                  className="errmsg"
                >
                  {errComment}
                </div>
              ) : (
                ""
              )}
            </div>
          </React.Fragment>
        ) : click ? (
          ""
        ) : (
          <React.Fragment>
            <hr />
            <LoginInfo type="comment" />
          </React.Fragment>
        )}
      </div>
    );
  }
}
