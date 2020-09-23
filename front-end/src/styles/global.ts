import { createGlobalStyle } from 'styled-components';

import bd from '../assets/bd.svg';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        background: #212426 url(${bd}) no-repeat 70% top;
        --webkit-font-smoothing: antialised;
    }

    body, select, textarea, button {
      font: 16px Roboto, sans-serif;
    }

    button {
        cursor: pointer;
    }

    #root {
      max-width: 960px;
      margin: 0 200px;
      padding: 40px 20px;
    }
`;
