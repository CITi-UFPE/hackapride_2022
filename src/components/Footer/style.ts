import styled, { keyframes } from 'styled-components';

export const FooterContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
`;

export const InverseRainbowContainer = styled.div`
  width: 272px;
  height: 532px;
  background-color: #f00;
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
