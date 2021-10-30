import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    margin-top: 40px;
    text-align: center;
    @media (max-width: 720px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;
    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }
  }

  img {
    width: 25%;
  }
`;
export const MainTitle = styled.div`
  /* margin-top: 404px; */
  justify-content: center;
  align-self: center;
  max-width: 979px;
  font-size: 64px;
  font-weight: 400;
  font-family: BalooExtraBold;
  color: ${(props) => props.theme.colors.black};
`;

export const RainbowContainer = styled.div`
  margin-top: 21px;
  width: 272px;
  height: 532px;
  background-color: #f00;
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

// const RainbowAnimation = keyframes`
// up-down {
//   0% {
//       top: 0;
//   }
//   100% {
//       top: 156px;
//   }
// `;

// export const Rainbow = styled.div`
//   // animation: loading 1.5s 1s infinite;
//   // color: #0f0;
//   // background-color: #f00;
//   // height: 200px;
//   // width: 30px;
//   // border-radius: 0 0 30px 30px;
//   // width: 30px;
//   // background: tomato;
//   // border-radius: 3px;
//   // animation: ${RainbowAnimation} 1.5s 1s infinite;
//   position: absolute;
//     top: -80%;
//     width: 100%;
//     height: 100%;
//     border-radius: 22px;
//     background-color: #BC86E2;
//     -webkit-animation-name: up-down;
//             animation-name: up-down;
//     -webkit-animation-duration: 1.3s;
//             animation-duration: 1.3s;
//     -webkit-animation-timing-function: cubic-bezier(.42, 0, .58, 1);
//             animation-timing-function: cubic-bezier(.42, 0, .58, 1);
//     -webkit-animation-iteration-count: infinite;
//             animation-iteration-count: infinite;
//     -webkit-animation-fill-mode: both;
//             animation-fill-mode: both;
//     -webkit-animation-direction: alternate;
//             animation-direction: alternate;
// `;
