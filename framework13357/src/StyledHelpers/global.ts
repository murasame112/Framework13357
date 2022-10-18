import React from 'react';
import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';
import {colorStack} from './colors';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html{
        font-size:16px;
    }

    body{
        background: ${colorStack.black};
        overflow: hidden;
        height: 100vh;
        font-familiy: 'roboto', sans-serif;
    }

    a, p{
        color: ${colorStack.white};
        font-size: 1rem;
        text-decoration: none;
    }

    a{
        border: 1px solid ${colorStack.white};
    }
`