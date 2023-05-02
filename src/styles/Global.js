import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 100%;
  }
  
  body {
    font-family: ${(props) => props.theme.fontFamily[0]}, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    background: ${(props) => props.theme.colors.bgPrimary};
    overflow-x: hidden;
  }
  
  header {
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 100;
    box-shadow: 0 16px 32px -16px rgba(0,0,0,.1),0 0 0 1px rgba(0,0,0,.1);
  }
  
  main {
    width: 100%;
    max-width: 606px;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding-top: 64px;
  }
  
  footer {
    width: 100%;
    padding: 0 14px;
    margin: 0 auto;
  }

  img {
    display: block;
  }
  
  section {
    padding: 0 14px;
  }
  
  li {
    list-style: none;
  }
  
  a {
    font-family: ${(props) => props.theme.fontFamily[0]}, sans-serif;
    text-decoration: none;
    color: ${(props) => props.theme.colors.textSecondary};
  }

  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    cursor: pointer;
    line-height: 0;
  }
`;

export default GlobalStyles;
