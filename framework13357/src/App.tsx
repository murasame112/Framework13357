import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from "react-router-dom";
import {FC} from "react";
import {Home} from "./Components/Routes/Home/home";
import {Posts} from "./Components/Routes/Posts/posts";
import {Feed} from "./Components/Routes/Feed/feed";
import {User} from "./Components/Routes/User/user";
import {Login} from "./Components/Routes/Login/login";

export const App: FC = () => {
  return(
      <Router>
      <div>
        <Link to="/">Home </Link>
        <Link to="posts">Posts: </Link>
        <Link to="feed">Feed: </Link>
        <Link to="user">User: </Link>
        <Link to="login">Login: </Link>
        
          
      </div>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="posts" element={<Posts/>}/>
        <Route path="feed" element={<Feed/>}/>
        <Route path="user" element={<User/>}/>
        <Route path="login" element={<Login/>}/>

          
      </Routes>
      </Router>
  );
}


