import styled from 'styled-components';

export const FooterContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const InverseRainbowContainer = styled.img`
  width: 200px;
  @media(max-width: 720px) {
    width: 130px;
  }
`;

export const FooterText = styled.div`
  justify-content: center;
  align-self: center;
  max-width: 300px;
  font-size: 18px;
  font-weight: 400;
  font-family: Baloo;
  margin: auto 8% 2% 8%;
  color: ${(props) => props.theme.colors.black};
`;
