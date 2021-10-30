import styled from 'styled-components';

export const ContainerAwards = styled.div`
  width: 100vw;
  height: 100vh;

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
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StarsMobileAwards = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextBodyAwards = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
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
`;

export const SubTitleAwards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-bottom: 5rem;
  font-family: BalooExtraBold;
  font-size: 24px;
  line-height: 106.9%;
  text-align: center;
  letter-spacing: 0.09em;
  color: #28201A;

`;

export const ListAwards = styled.div`
`;

export const ListItemAwards = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 3rem;
`;

export const Description = styled.div`
  padding-left: 20px;
`;

export const SupremeTitleAwards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 2rem;
  font-family:  BalooExtraBold;
  color: #28201A;
  font-size: 44px;
  line-height: 100.4%;
  text-align: center;
  letter-spacing: 0.05em;
`;
