import styled, { keyframes } from 'styled-components';

export const FooterContainer = styled.div`
  justify-content: space-between;
  max-width: 1300px;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  margin-right: 180px;
  margin-left: 180px;
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
  font-size: 24px;
  font-weight: 400;
  font-family: Baloo;
  color: ${(props) => props.theme.colors.black};
`;
