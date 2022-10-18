import {FC} from "react";
import React from 'react';
import styled from 'styled-components';
import {TopMenu} from './topMenu';
import {colorStack} from '../../StyledHelpers/colors';

const Wrapper = styled.div`
    width:100%;
    height:100vh;
`
const Content = styled.div`
    background: ${colorStack.cherry};
    width:1024px;
    height:40%;
    margin:0 auto;
    padding: 0 1rem;
`

interface IProps{
    children: JSX.Element;
}

export const Layout: FC<IProps> = props => {
    return (
        <Wrapper>
            <TopMenu />
                <Content>
                    {props.children}
                </Content>
        </Wrapper>
    );
}