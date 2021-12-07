import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 200px 30px 80px 30px;

  @media (max-width: 910px) {
    padding: 120px 30px 40px 30px;
  }
`;

export const TitleText = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 46px;
  font-weight: 400;
  font-family: BalooExtraBold;
  text-align: center;
  letter-spacing: 0.05em;
  line-height: 100.4%;

  @media (max-width: 910px) {
    font-size: 24px;
  }
`;

export const SubtitleText = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 38px;
  font-weight: 400;
  font-family: BalooExtraBold;
  padding: 14px 20px;
  border-radius: 10px;
  margin-top: 72px;
  text-align: center;
  line-height: 100.4%;
  margin-top: 72px;

  @media (max-width: 910px) {
    font-size: 24px;
  }
`;

export const Button = styled.div`
  background-color: #28201A;
  height: 56px;
  width: 234px;
  margin-top: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const WebRainbow = styled.img`
  width: 200px;
  margin-top: 15px;

  @media(max-width: 910px) {
    display: none;
  }
`;

export const MobileRainbow = styled.img`
  width: 130px;
  margin-top: 15px;

  @media (min-width: 910px) {
    display: none;
  }
`;

export const ButtonText = styled.p`
  color: #EEDED1;
  font-size: 28px;
`;

export const Image = styled.img`
  margin-top: 21px;
  width: 200px;
`;

export const MainText = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 20px;
  font-weight: 400;
  line-height: 110.9%;
  letter-spacing: 0.09em;
  font-family: BalooExtraBold;
  text-align: center;
  margin-top: 130px;
  width: 55%;

  @media (max-width: 910px) {
    font-size: 14px;
    margin-top: 70px;
    width: 80%;
  }
`;
