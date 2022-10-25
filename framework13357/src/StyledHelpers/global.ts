import React from 'react';
import reset from 'styled-reset';
import {createGlobalStyle} from 'styled-components';
import {colorStack} from './colors';
import bree_serif from './bree_serif.ttf'

export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
     font-family: 'bree_serif';
     font-style: normal;
     font-weight: 300;
     src: local('bree_serif'), url(${bree_serif});
   }

    html{
        font-size:16px;
    }

    body{
        background: ${colorStack.gray};
        overflow: hidden;
        height: 100vh;
        font-family: 'bree_serif';
    }

    p{
        color: ${colorStack.white};
        font-size: 1rem;
        text-decoration: none;
    }

    
    
    
`