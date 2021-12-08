import { createGlobalStyle } from 'styled-components';
import BalooBold from '../assets/Baloo2-Bold.ttf';
import BalooExtraBold from '../assets/Baloo2-ExtraBold.ttf';
import BalooRegular from '../assets/Baloo2-Regular.ttf';

export const mainUrl = 'http://localhost:1337';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  h1,h2,h3{
    font-family:  BalooExtraBold;
  }

  p {
    font-family:  BalooExtraBold;
  }

  @font-face {
    font-family: 'BalooBold';
    src: url(${BalooBold}) format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'BalooExtraBold';
    src: url(${BalooExtraBold}) format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'BalooRegular';
    src: url(${BalooRegular}) format('woff2');
    font-style: normal;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width:720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
