import { useEffect, useState } from "react";
import { request } from "../../api/api";
import { AlbumList } from "../../components/components";

export function Explore() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    request.get.album("").then((res) => {
      setdata(res.data);
    });
  }, []);
  return (
    <div>
      <AlbumList data={data} />
    </div>
  );
}
