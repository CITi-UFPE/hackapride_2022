import styled from 'styled-components';

export const SectionContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
`;

export const Container = styled.div`
  width: 100%;
  height: 100px;
  gap: 140px;
  display: flex;
  justify-content: center;
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
  letter-spacing: 1px;
  gap: 30px;
`;

export const MenuOption = styled.p`
  font-size: 20px;
  cursor: pointer;
  position: relative;

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
