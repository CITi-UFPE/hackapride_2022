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

export const HamburguerContainer = styled.div`

  #checkbox-menu {
    position: absolute;
    opacity: 0;
  }

  label {
    cursor: pointer;
    position: relative;
    display: block;
    height: 24px;
    width: 30px;
  }

  label span:nth-child(1) {
    top: 0;
  }

  label span:nth-child(2) {
    top: 10px;
  }

  label span:nth-child(3) {
    top: 20px;
  }

  #checkbox-menu:checked + label span:nth-child(1) {
    transform: rotate(-45deg);
    top: 10px;
  }

  #checkbox-menu:checked + label span:nth-child(2) {
    opacity: 0;
  }

  #checkbox-menu:checked + label span:nth-child(3) {
    transform: rotate(45deg);
    top: 10px;
  }

  @media (min-width: 910px) {
    & {
      display: none;
    }
  }

`;

export const HamburguerLines = styled.span`
  position: absolute;
  display: block;
  height: 6px;
  width: 100%;
  border-radius: 30px;
  background-color: #884100;
  transition: 0.25s ease-in-out;
`;
