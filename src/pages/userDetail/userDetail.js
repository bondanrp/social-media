import qs from "qs";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { request } from "../../api/api";
import { AlbumList, PostList, Profile } from "../../components/components";

export function UserDetail(props) {
  const location = useLocation();
  const [data, setdata] = useState({});
  const [posts, setposts] = useState([]);
  const [albums, setalbums] = useState([]);
  useEffect(() => {
    let query = qs.parse(location.search, { ignoreQueryPrefix: true });
    request.get.userDetail(query.id).then((res) => setdata(res.data));
    request.get.userPost(query.id).then((res) => setposts(res.data));
    request.get.userAlbum(query.id).then((res) => setalbums(res.data));
  }, []);

  if (data && data.name) {
    return (
      <div className="container">
        <Profile data={data} />
        <AlbumList data={albums} name={data.name} />
        <p className="post-title">
          Posts by <span>{data.name}</span>
        </p>
        <PostList data={posts} />
      </div>
    );
  } else {
    return <div />;
  }
}
