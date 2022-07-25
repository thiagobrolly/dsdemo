import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box
  }

  html {
    font-size: 62.5%; // 10px
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: ${theme.font.family.primary};
    font-weight: 400;
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a{
    color: inherit;
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px
  }

  ::-webkit-scrollbar-track-piece {
    background-color: ${theme.color.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: #4e5872;
    border-radius: 2px;
  }
`;
