import {
    BrowserRouter as Router, 
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import React from 'react';
  import styled from 'styled-components';
  import {FC} from "react";
  import {colorStack} from '../../StyledHelpers/colors';

const Content = styled.div`
  background: ${colorStack.light_cherry};
  width:100%;
  height:5%;
  border-bottom: 1px solid ${colorStack.white};
  display:flex;
  justify-content:center;
`
const Wrap = styled.div`
    width:60%;
    display:flex;
    justify-content:space-around;
`

const SingleLink = styled.div`
background: ${colorStack.cherry};
font-size:24px;
width:15%;
display:flex;


a{
    color:${colorStack.white};
    text-decoration: none;
    font-size:24px;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
}

:hover{
    background-color:#86091e;
}
`

export const TopMenu: FC = () => {
    return(
        <Content>
            <Wrap>
                <SingleLink><Link to="/">Home </Link></SingleLink>
                <SingleLink><Link to="posts">Posts</Link></SingleLink>
                <SingleLink><Link to="feed">Feed</Link></SingleLink>
                <SingleLink><Link to="user">User</Link></SingleLink>
                <SingleLink><Link to="login">Login </Link></SingleLink>
            </Wrap>
            
        </Content>
    );
}