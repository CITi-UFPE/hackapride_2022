import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainPage = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DatePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: auto;
`;

export const MainTitle = styled.div`
  margin-top: 100px;
  justify-content: center;
  text-align: center;
  max-width: 979px;
  font-size: 64px;
  font-weight: 400;
  font-family: BalooExtraBold;
  color: ${(props) => props.theme.colors.black};
`;

export const RainbowContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 45px;
  height: 200px;
  background-color: grey;
  border-radius: 22px;
  overflow: hidden;
`;

export const DateTitle = styled.div`
  margin-top: 72px;
  justify-content: center;
  align-self: center;
  max-width: 558px;
  font-size: 56px;
  font-weight: 400;
  font-family: BalooExtraBold;
  color: ${(props) => props.theme.colors.black};
`;

export const HomeButton = styled.div`
  justify-content: center;
  align-self: center;
  background-color: ${(props) => props.theme.colors.brown};
  color: ${(props) => props.theme.colors.white};
  font-size: 28px;
  font-weight: 400;
  font-family: BalooExtraBold;
  padding: 14px 20px;
  border-radius: 10px;
  margin-top: 72px
`;

export const HomeText = styled.div`
  margin-top: 133px;
  justify-content: center;
  align-self: center;
  max-width: 930px;
  font-size: 24px;
  font-weight: 400;
  font-family: BalooExtraBold;
  color: ${(props) => props.theme.colors.black};
`;

const RainbowAnimation = keyframes` up-down {
  0% {
      top: 0;
  }
  100% {
      top: 156px;
  }
}
`;

export const Rainbow = styled.div`
  position: absolute;
  top: -80%;
  width: 100%;
  height: 100%;
  border-radius: 22px;
  background-color: #BC86E2;
  -webkit-animation-name: up-down;
          animation-name: up-down;
  -webkit-animation-duration: 1.3s;
          animation-duration: 1.3s;
  -webkit-animation-timing-function: cubic-bezier(.42, 0, .58, 1);
          animation-timing-function: cubic-bezier(.42, 0, .58, 1);
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-fill-mode: both;
          animation-fill-mode: both;
  -webkit-animation-direction: alternate;
          animation-direction: alternate;
`;

export const RainbowBubble = styled.div`
  position: absolute;
  top: 0;
  width: 44px;
  height: 44px;
  margin: auto;
  border-radius: 100%;
  background-color: #8861A4;
  -webkit-animation-name: up-down;
            animation-name: up-down;
    -webkit-animation-duration: 1.3s;
            animation-duration: 1.3s;
    -webkit-animation-timing-function: cubic-bezier(.42, 0, .58, 1);
            animation-timing-function: cubic-bezier(.42, 0, .58, 1);
    -webkit-animation-iteration-count: infinite;
            animation-iteration-count: infinite;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    -webkit-animation-direction: alternate;
            animation-direction: alternate;
`;
