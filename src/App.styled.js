import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html,
    body {
        width: 100%;
        height: 100%;
        font-family: "Roboto", Arial, Helvetica, sans-serif;
        color: #000000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:before,
    *:after {
        box-sizing: border-box;
    }

    a,
    a:visited {
        text-decoration: none;
        cursor: pointer;
    }

    button,
    ._btn {
        cursor: pointer;
        outline: none;
    }

    ul li {
        list-style: none;
    }
`;

export const Wrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f1f1f1;
`;
Wrapper.displayName = "Wrapper";

export default GlobalStyle;
