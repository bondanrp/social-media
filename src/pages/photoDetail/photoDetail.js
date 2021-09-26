import qs from "qs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { request } from "../../api/api";
import { Photo, CommentList } from "../../components/components";
import { getUser } from "../../helper/function";
import style from "./photoDetail.module.scss";

export function PhotoDetail(props) {
  const location = useLocation();
  const [album, setalbum] = useState({});
  const [albumID, setalbumID] = useState({});
  const [data, setdata] = useState({});
  const [nextPhoto, setnextPhoto] = useState({});
  const [prevPhoto, setprevPhoto] = useState({});
  const [refresh, setrefresh] = useState(true);
  const [loading, setloading] = useState(false);

  const users = useSelector((state) => state.reducers.users);

  useEffect(() => {
    setloading(true);
    setdata({});
    setnextPhoto({});
    setprevPhoto({});
    setdata({});
    let query = qs.parse(location.search, { ignoreQueryPrefix: true });

    request.get.photo(Number(query.id)).then((res) => {
      setdata(res.data);
      request.get
        .album(res.data.albumId)
        .then((res2) => {
          setalbum(res2.data);
        })
        .catch((err) => {
          console.log("no photo");
        });
    });
    request.get.photo(Number(query.id) + 1).then((res) => {
      setnextPhoto(res.data);
      setalbumID(res.data.albumId);
    });
    request.get
      .photo(Number(query.id) - 1)
      .then((res) => {
        setprevPhoto(res.data);
      })
      .catch((err) => {
        console.log("no photo");
      });
    setloading(false);
  }, [refresh]);

  const forceRefresh = () => {
    setrefresh(!refresh);
  };

  return (
    <div className="container">
      <div className={style.title}>
        <Link to={`/album?${qs.stringify({ id: album.id })}`}>
          {album.title}
        </Link>
        <p>By</p>
        <div>{getUser(users, album.userId)}</div>
      </div>
      <div className={style.photoContainer}>
        {loading ? (
          <p>test</p>
        ) : (
          <div className={style.top}>
            {prevPhoto.albumId === albumID ? (
              <div onClick={forceRefresh}>
                <Photo click={true} big={true} data={prevPhoto} />
              </div>
            ) : (
              <div></div>
            )}
            <Photo big={true} data={data} />
            {nextPhoto.albumId === albumID ? (
              <div onClick={forceRefresh}>
                <Photo click={true} big={true} data={nextPhoto} />
              </div>
            ) : (
              <div></div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
