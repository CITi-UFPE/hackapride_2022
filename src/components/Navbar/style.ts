import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  position: fixed;
  z-index: 1000;
  background-color: #EEDED1;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background};
`;

export const ContentContainer = styled.div`
  display: flex;
`;

export const LogoImage = styled.img`
  height: 24px;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 910px) {
    & {
      display: none;
    }
  }
`;

export const MenuOption = styled.a`
  font-size: 20px;
  cursor: pointer;
  position: relative;
  font-family:  BalooBold;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};

  &:after {
    content: '';
    position: absolute;
    background-color: #28201A;
    width: 0;
    height: 2px;
    left: 0;
    bottom: -7px;
    transition: 0.3s;
  }

  &:hover:after {
    width: 100%;
}
`;

export const HamburguerLines = styled.label`
  cursor: pointer;
  position: relative;
  display: block;
  height: 24px;
  width: 30px;

  @media (min-width: 910px) {
    & {
      display: none;
    }
  }
`;

export const Lines = styled.span`
  display: block;
  margin-bottom: 5px;
  border-radius: 50px;
  height: 6px;
  width: 100%;
  background-color: #884100;
  transition: 0.25s ease-in-out;

  @media (min-width: 910px) {
    & {
      display: none;
    }
  }
`;

export const OpenedHamburguer = styled.div`
  display: flex;
  margin-top: 99px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  position: absolute;
  background-color: ${(props) => props.theme.colors.background};;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const FlowerImage = styled.img`
  bottom: 50px;
  position: absolute;
  left: -80px;
  width: 400px;

  @media (max-width: 380px) {
    & {
      width: 350px;
    }
  }
`;

export const ButtonContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  width: 60%;
  border: 3px;
  border-color: #28201A;
  border-style: solid;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  border-radius: 8px;
  padding: 5px 10px;
`;

export const ButtonText = styled.p`
  color: #28201A;
  font-size: 28px;
`;
