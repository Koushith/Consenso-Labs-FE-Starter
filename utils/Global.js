/*
 Normalize.css is a small CSS file that provides better cross-browser consistency in the default styling of HTML elements. It’s a modern, HTML5-ready, alternative to the traditional CSS reset. we use polish library to achieve this
 */

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
${normalize()}
html{
    box-sizing:border-box;
    font-size: 16px;

}

*, *:before, *:after {
  box-sizing: inherit;
}

body{
    margin :0;
    padding:0;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;

}
`;
