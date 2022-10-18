// styled-reset, @types/styled-components, styled-components, --save @types/react-router-dom,  react-router-dom --save
import {
  BrowserRouter as Router, 
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import {FC} from "react";
import {Home} from "./Components/Routes/Home/home";
import {Posts} from "./Components/Routes/Posts/posts";
import {Feed} from "./Components/Routes/Feed/feed";
import {User} from "./Components/Routes/User/user";
import {Login} from "./Components/Routes/Login/login";
import {GlobalStyle} from './StyledHelpers/global';
import {Layout} from './Components/Common/layout';

export const App: FC = () => {
  return(
    <>
      <GlobalStyle />
        <Router>
          
          <Layout>
            <>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="posts" element={<Posts/>}/>
                <Route path="feed" element={<Feed/>}/>
                <Route path="user" element={<User/>}/>
                <Route path="login" element={<Login/>}/>
              </Routes>
            </>
          </Layout>
        </Router>
      </>
  );
}


