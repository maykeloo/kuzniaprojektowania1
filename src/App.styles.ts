import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

interface Props {
  isChanging: boolean;
}

export const GRAY_TEXT = "#AAAAAA";
export const LINE_HEIGHT_P = "1.5rem";
export const CUBIC = "cubic-bezier(0.62,0.05,0.01,0.99)";

export const GlobalStyle = createGlobalStyle`


body {
  margin: 0;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  @media screen and (min-width: 786px) {
    overflow: hidden; 
  }
}

* {
  box-sizing: border-box;
}

@media screen and (max-width: 768px){
  html{font-size:70%;}
  }
  @media screen and (min-width: 768px){
  html{font-size:53.33333333%;}
  }
  @media screen and (min-width: 1024px){
  html{font-size:71.111111%;}
  }
  @media screen and (min-width: 1200px){
  html{font-size:83.333333%;}
  }
  @media screen and (min-width: 1440px){
  html{font-size:100%;background:none;}
  }
`;

export const ContentWrapper = styled.main<Props>`
  width: 100vw;
  height: 100vh;
  transition: 1s ${CUBIC};
  transform: scale(${(props) => props.isChanging ? '0.6' : '1'});
`;

export const GridSystem = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

export const BoxOne = styled.div`
  grid-area: 1 / 1 / 5 / 4;
  position: relative;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const BoxTwo = styled.div`
  grid-area: 1 / 4 / 5 / 6;
`;
export const BoxThree = styled.div`
  grid-area: 5 / 1 / 7 / 3;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const BoxFour = styled.div`
  grid-area: 5 / 3 / 7 / 5;
`;
export const BoxFive = styled.div`
  grid-area: 5 / 5 / 7 / 6;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CursorDiv = styled.div`
  background-color: #ffffff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  pointer-events: none;
  position: fixed;
  z-index: 999999;
  top: 0;
  left: 0;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
`;
