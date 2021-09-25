import qs from "qs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { request } from "../../api/api";
import { PhotoList } from "../../components/components";
import { getUser } from "../../helper/function";

export function AlbumDetail(props) {
  const location = useLocation();
  const [data, setdata] = useState({});
  const [photos, setphotos] = useState([]);
  const users = useSelector((state) => state.reducers.users);

  useEffect(() => {
    let query = qs.parse(location.search, { ignoreQueryPrefix: true });
    request.get.album(query.id).then((res) => setdata(res.data));
    request.get.albumPhotos(query.id).then((res) => setphotos(res.data));
  }, []);

  return (
    <div className="container">
      <p>{data.title}</p>
      by {getUser(users, data.userId)}
      <PhotoList data={photos} />
    </div>
  );
}
