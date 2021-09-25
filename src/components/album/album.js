import qs from "qs";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { request } from "../../api/api";

export default function Album({ data }) {
  const [cover, setcover] = useState([]);
  useEffect(() => {
    request.get.albumPhotos(data.id).then((res) => {
      setcover(res.data[0]);
    });
  }, []);

  return (
    <Link to={`/album?${qs.stringify({ id: data.id })}`}>
      <img src={cover.thumbnailUrl} />
      <p>{data.title}</p>
    </Link>
  );
}
