import qs from "qs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { request } from "../../api/api";
import { CommentList, Post } from "../../components/components";

export function PostDetail(props) {
  const auth = useSelector((state) => state.reducers.auth);

  const location = useLocation();
  const [data, setdata] = useState({});
  const [comments, setcomments] = useState([]);
  const [errComment, seterrComment] = useState("");
  const [state, setstate] = useState({
    edit: false,
    comment: false,
    inputTitle: "",
    inputBody: "",
    inputComment: "",
  });
  useEffect(() => {
    let query = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (query.f) {
      setdata(query.d);
      setstate({
        ...state,
        inputBody: query.d.body,
        inputTitle: query.d.title,
      });
    } else {
      request.get.postDetail(query.id).then((res) => {
        setdata(res.data);
        setstate({
          ...state,
          inputBody: res.data.body,
          inputTitle: res.data.title,
        });
      });
      request.get.postComments(query.id).then((res) => setcomments(res.data));
    }
  }, []);

  function handleSave() {
    setstate({ ...state, edit: false });
    request.patch
      .editPost(data.id, {
        title: state.inputTitle,
        body: state.inputBody,
      })
      .then((res) => {
        setdata(res.data);
      });
  }
  function handleSaveComment() {
    setstate({ ...state, edit: false });
    request.patch
      .editComment(data.id, {
        body: state.inputBody,
      })
      .then((res) => {});
  }

  const handleChange = (e) => {
    setstate({ ...state, [e.target.id]: e.target.value });
  };

  function handlePostComment() {
    if (state.inputComment) {
      request.put
        .postComment(data.id, {
          name: auth.name,
          email: auth.email,
          body: state.inputComment,
          userId: 1,
          key: new Date().getTime(),
        })
        .then((res) => {
          seterrComment("");
          var newComments = comments;
          newComments.unshift(res.data);
          setcomments(newComments);
          setstate({
            ...state,
            comment: false,
            inputComment: "",
          });
        });
    } else {
      seterrComment("Komentar tidak boleh kosong");
    }
  }

  const handleDelete = (id) => {
    request.delete.deleteComment(id).then((res) => {
      const newComments = comments;
      newComments.splice(
        newComments.findIndex((val) => val.id === id),
        1
      );
      setcomments(newComments);
    });
  };

  return (
    <div className="container">
      <Post
        state={state}
        click={false}
        data={data}
        handleSave={handleSave}
        handleChange={handleChange}
        setstate={setstate}
        handlePostComment={handlePostComment}
        errComment={errComment}
        seterrComment={seterrComment}
      />
      <CommentList
        data={comments}
        handleDelete={handleDelete}
        handleSaveComment={handleSaveComment}
      />
    </div>
  );
}
