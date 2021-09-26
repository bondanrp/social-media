import qs from "qs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { request } from "../../api/api";
import styles from "./album.module.scss";

export default function Album({ data, isProfile }) {
  const users = useSelector((state) => state.reducers.users);
  const [cover, setcover] = useState([]);
  useEffect(() => {
    request.get.albumPhotos(data.id).then((res) => {
      setcover(res.data[0]);
    });
  }, []);

  return (
    <div>
      <Link to={`/album?${qs.stringify({ id: data.id })}`}>
        <img src={cover.thumbnailUrl} />
        <p className={styles.title}>{data.title}</p>
      </Link>
      {isProfile
        ? ""
        : users.map((user) => {
            if (user.id === data.userId) {
              return (
                <Link
                  to={`/user?${qs.stringify({ id: user.id })}`}
                  className={styles.album}
                  key={(data.title, data.userId)}
                >
                  <p>{user.name}</p>
                  <p>@{user.username}</p>
                </Link>
              );
            }
          })}
    </div>
  );
}
