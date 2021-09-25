import { useSelector } from "react-redux";
import styles from "./post.module.scss";
import qs from "qs";
import { Link } from "react-router-dom";
import { getUser } from "../../helper/function";
import { LoginInfo } from "../components";
import { request } from "../../api/api";
import { useHistory } from "react-router";
import React, { useState } from "react";

export default function Post({
  state,
  data,
  click,
  handlePostComment,
  handleSave,
  handleChange,
  setstate,
  fake,
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
      <div className={styles.post}>
        <p>{getUser(users, data.userId)}</p>
        {click ? (
          <React.Fragment>
            <Link to={link}>
              <p>{data.title}</p>
              <p>{data.body}</p>
            </Link>
            <button>
              <Link to={link}>Comments</Link>
            </button>
            {auth ? (
              <button
                onClick={() => {
                  handleDelete(data.id);
                  setdeleted(true);
                }}
              >
                Delete
              </button>
            ) : (
              ""
            )}
          </React.Fragment>
        ) : (
          <div>
            {state && state.edit ? (
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
            ) : (
              <div>
                <p>{data.title}</p>
                <p>{data.body}</p>
              </div>
            )}
            {state && state.edit ? (
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
            ) : (
              <div>
                <button
                  onClick={() => {
                    setstate({ ...state, comment: true });
                  }}
                >
                  Comment
                </button>
                <button
                  onClick={() => {
                    setstate({ ...state, edit: true });
                  }}
                >
                  Edit
                </button>
                {auth ? (
                  <button
                    onClick={() => {
                      handleDelete(data.id);
                      setdeleted(true);
                    }}
                  >
                    Delete
                  </button>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        )}
        {state && state.comment ? (
          auth ? (
            <div>
              <textarea
                id="inputComment"
                value={state.inputComment}
                onChange={handleChange}
              />
              <button
                onClick={() => {
                  setstate({ ...state, comment: false });
                }}
              >
                Cancel
              </button>
              <button onClick={handlePostComment}>Save</button>
            </div>
          ) : (
            <LoginInfo type="comment" />
          )
        ) : (
          ""
        )}
      </div>
    );
  }
}
