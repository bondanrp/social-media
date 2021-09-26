import "./home.scss";
import { InputPost, LoginInfo, PostList } from "../../components/components";
import { useEffect, useState } from "react";
import { request } from "../../api/api";
import { useSelector } from "react-redux";

export function Home() {
  const auth = useSelector((state) => state.reducers.auth);

  const [posts, setposts] = useState([]);
  const [state, setstate] = useState({
    title: "",
    body: "",
  });
  const [err, seterr] = useState("");
  useEffect(() => {
    request.get.posts().then((res) => {
      setposts(res.data);
    });
  }, []);
  function handleSubmit() {
    if (state.body && state.title) {
      request.post
        .post({
          body: state.body,
          title: state.title,
          name: auth.name,
          username: auth.username,
          fake: true,
          key: new Date().getTime(),
        })
        .then((res) => {
          var newPosts = posts;
          newPosts.unshift(res.data);
          setposts(newPosts);
          setstate({
            title: "",
            body: "",
          });
          seterr("");
        });
    } else {
      seterr("Title/Post tidak boleh kosong");
    }
  }

  const handleChange = (e) => {
    setstate({ ...state, [e.target.id]: e.target.value });
  };

  const handleDelete = (e) => {
    request.get.posts().then((res) => {
      setposts(res.data);
    });
  };

  return (
    <div className="container">
      {!auth ? (
        <LoginInfo />
      ) : (
        <InputPost
          seterr={seterr}
          err={err}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          state={state}
        />
      )}
      <PostList data={posts} />
    </div>
  );
}
