import styled from 'styled-components';

export const Link = styled.a`
  outline:none; 
  text-decoration:none;
`;

export const SubtitleOfSubtitleText = styled.p`
color: ${(props) => props.theme.colors.black};
font-size: 30px;
font-weight: 400;
font-family: BalooExtraBold;
text-align: center;
line-height: 100.4%;
margin-top: 8px;
@media (max-width: 910px) {
  font-size: 24px;
}
`;

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
  padding: 12% 30px 80px 30px;

  @media (max-width: 910px) {
    padding: 120px 30px 40px 30px;
  }
`;

export const TitleText = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 36px;
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
  font-size: 36px;
  font-weight: 400;
  font-family: BalooExtraBold;
  padding: 0.5% 0px;
  border-radius: 10px;
  margin-top: 72px;
  text-align: center;
  line-height: 100.4%;
  margin-top: 72px;

  @media (max-width: 910px) {
    font-size: 24px;
  }
`;

export const Button = styled.button`
  background-color: #28201A;
  height: 40px;
  width: 180px;
  margin-top: 60px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline:none; 
  border: none;
  
  &:hover{
    /* background-color: #000000; */
    opacity: 0.9;
  }
`;

export const WebRainbow = styled.img`
  width: 180px;
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
  font-size: 22px;
  letter-spacing: 0.1em;
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
