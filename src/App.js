import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { request } from "./api/api";
import { Navbar, Spacer } from "./components/components";
import { AlbumDetail } from "./pages/albumDetail/albumDetail";
import { Explore } from "./pages/explore/explore";
import { Home } from "./pages/home/home";
import { Login } from "./pages/login/login";
import { PhotoDetail } from "./pages/photoDetail/photoDetail";
import { PostDetail } from "./pages/postDetail/postDetail";
import { UserDetail } from "./pages/userDetail/userDetail";
import { Users } from "./pages/users/users";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    request.get.users().then((res) => {
      dispatch({
        type: "USERS",
        payload: res.data,
      });
      let login = JSON.parse(localStorage.getItem("login"));
      dispatch({
        type: "LOGIN",
        payload: login,
      });
    });
  }, []);

  return (
    <div className="App">
      <Router basename="/social-media">
        <Navbar />
        <Spacer size="75px" />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/post" component={PostDetail} />
          <Route path="/user" component={UserDetail} />
          <Route path="/album" component={AlbumDetail} />
          <Route path="/photo" component={PhotoDetail} />
          <Route path="/explore" component={Explore} />
          <Route path="/users" component={Users} />
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
