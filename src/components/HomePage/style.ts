import styled from 'styled-components';

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
  margin-top: 72px;
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

export const WebRainbow = styled.img`
  width: 200px;
  @media(max-width: 720px) {
    display: none;
  }
`;

export const MobileRainbow = styled.img`
  width: 130px;
  @media(min-width: 720px) {
    display: none;
  }
`;
