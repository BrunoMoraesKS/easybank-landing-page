import * as styled from "styled-components";

export const colors = {
  darkBlue: "hsl(233, 26%, 24%)",
  transparentDarkBlue: "hsl(233, 26%, 24%, 0.7)",
  limeGreen: "hsl(136, 65%, 51%)",
  brightCyan: "hsl(192, 70%, 51%)",

  grayishBlue: "hsl(233, 8%, 62%)",
  lightGrayishBlue: "hsl(220, 16%, 96%)",
  veryLightGray: "hsl(0, 0%, 98%)",
  transparentVeryLightGray: "hsl(0, 0%, 98%, 0.3)",
  white: "hsl(0, 0%, 100%)",
};

export const weight = {
  large: "700",
  medium: "400",
  small: "300",
};

export const breakpoints = {
  hg: "1440px",
  xlg: "1300px",
  lg: "1170px",
  md: "969px",
  sm: "768px",
  xsm: "450px",
};

export const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smooothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body,
  html {
    font-family: "Public Sans", sans-serif;
    font-size: 62.5%;
    background-color: ${colors.white};
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
    max-width: 1440px;
    margin: auto;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p,
  span {
    color: ${colors.grayishBlue};
    font-size: 1.5rem;
    line-height: 28px;
  }
  p {
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.darkBlue};
  }

  h2 {
    font-size: 4rem;
    font-weight: ${weight.medium};
  }

  h3 {
    font-size: 3rem;
    font-weight: ${weight.medium};
  }

  h4 {
    font-size: 1.8rem;
    font-weight: ${weight.medium};
  }
`;
