import {
    BrowserRouter as Router, 
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react';
  import {FC} from "react";

export const TopMenu: FC = () => {
    return(
        <div>
            <div>
                <Link to="/">Home </Link>
                <Link to="posts">Posts</Link>
                <Link to="feed">Feed</Link>
                <Link to="user">User</Link>
                <Link to="login">Login </Link>
              </div>
        </div>
    );
}