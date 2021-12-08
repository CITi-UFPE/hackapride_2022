import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerAwards = styled.div`
  margin-top: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

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
  }

  @media (max-width: 720px) {
    margin-top: 30px;

    p {
      font-size: 16px;
      margin-top: 0;
    }

    h1 {
      font-size: 28px;
    }    
  }
`;

export const StarsWebAwards = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  height: 100%;
  padding: 40px;
  width: 12.5;
  background-color: aqua;
`;

export const StarsMobileAwards = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBodyAwards = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 830px) {
      width: 40%;
  }
`;

export const HeaderAwards = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&display=swap');
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleAwards = styled.div`
  display: flex;
  align-items: center;
  font-family: BalooExtraBold;
  color: #28201A;
  font-size: 30px;
  line-height: 100.4%;
  text-align: center;
  letter-spacing: 0.05em;
  @media (max-width: 830px) {
      font-size: 20px;
    }
`;

export const SubTitleAwards = styled.div`
  width: 60%;
  padding-bottom: 6rem;
  font-family: BalooExtraBold;
  font-size: 20px;
  line-height: 106.9%;
  text-align: center;
  letter-spacing: 0.09em;
  color: #28201A;
  @media (max-width: 830px) {
      display: none;
    }

`;

export const SubTitleAwardsMobile = styled.div`
  display: none;
  @media (max-width: 830px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding-bottom: 6rem;
    font-family: BalooExtraBold;
    font-size: 24px;
    line-height: 106.9%;
    text-align: center;
    letter-spacing: 0.09em;
    font-size: 16px;
    color: #78706A;
    width: 65%;
  }

`;

export const AwardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
`;

export const ListAwards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;

  @media(max-width: 830px) {
    gap: 15px;
  }
`;

export const ListItemAwards = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  padding-bottom: 3rem;
  @media (max-width: 830px) {
      flex-direction: column;
      gap: 10px;
    }
`;

export const Description = styled.div`
  width: 40%;
  font-family:  BalooBold;
  font-size: 20px;
  line-height: 106.9%;

  @media (max-width: 830px) {
      font-size: 16px;
      padding: 0;
      width: 100%;
    }
`;

export const SupremeTitleAwards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 1.7rem;
  font-family:  BalooExtraBold;
  color: #28201A;
  font-size: 30px;
  line-height: 100.4%;
  text-align: center;
  letter-spacing: 0.05em;
  @media (max-width: 830px) {
      font-size: 24px;
      line-height: 20%;
    }
`;

export const RainbowImage = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media(max-width: 830px) {
    transform: scale(.8);
  }
`;

export const StarWebImage = styled.img`
  transform: scale(.6);

  @media (max-width: 830px) {
      display: none;
    }

`;

export const StarMobileImage = styled.img`
  @media (min-width: 831px) {
    display: none;
  }
  
  @media (max-width: 830px) {
    transform: scale(0.9);
  }
`;
