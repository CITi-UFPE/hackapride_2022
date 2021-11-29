import styled from 'styled-components';

export const ContainerAwards = styled.div`
  height: calc(100vh - 100px);

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
    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }
  }

  img {
    width: 25%;
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
  padding-top: 3rem;
  width: 80%;
  height: 100vh;
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
`;

export const TitleAwards = styled.div`
  font-family:  BalooExtraBold;
  color: #28201A;
  font-size: 44px;
  line-height: 100.4%;
  text-align: center;
  letter-spacing: 0.05em;
  width: 30%;
  @media (max-width: 830px) {
      font-size: 24px;
    }
`;

export const SubTitleAwards = styled.div`
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
    font-size: 14px;
    color: #78706A;
    padding-left: 12px;
    padding-right: 12px;
  }

`;

export const ListAwards = styled.div`
`;

export const ListItemAwards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 3rem;
  @media (max-width: 830px) {
      flex-direction: column;
    }
`;

export const Description = styled.div`
  padding-left: 20px;
  font-family:  BalooBold;
  font-size: 20px;
  line-height: 106.9%;
  @media (max-width: 830px) {
      font-size: 14px;
      padding: 0;
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
  font-size: 44px;
  line-height: 100.4%;
  text-align: center;
  letter-spacing: 0.05em;
  @media (max-width: 830px) {
      font-size: 24px;
    }
`;

export const RainbowImage = styled.img`
  height: 44px;
  width: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const StarWebImage = styled.img`
  width: 70px;
  height: 250px;
  @media (max-width: 830px) {
      display: none;
    }

`;

export const StarMobileImage = styled.img`
  @media (min-width: 831px) {
    display: none;
  }
  
  @media (max-width: 830px) {
    width: 70px;
    height: 250px;
    }
`;
