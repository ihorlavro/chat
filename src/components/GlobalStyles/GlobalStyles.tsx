import { createGlobalStyle, css } from 'styled-components';

const normalize = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    min-width: 320px;
    background-color: #fff;
    width: 100%;
    height: 100%;
    font-size: 16px;
    line-height: 1.5;
    text-rendering: geometricPrecision;
    -webkit-font-smoothing: antialiased;
    font-family: -apple-system, system-ui, Segoe UI, Ubuntu, Cantarell, Noto Sans, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica Neue, Arial, sans-serif;
  }
`;

export default GlobalStyle;