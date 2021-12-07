import styled from 'styled-components';

export const FooterContainer = styled.div`
  justify-content: center;
  display: flex;
  gap: 90px;

  p {
    margin-bottom: 15px;
    align-self: flex-end;
    font-size: 18px;
    color: ${(props) => props.theme.colors.black};
  }

  @media(max-width: 720px) {
    flex-direction: column;
    gap: 10px;

    p {
      font-size: 16px;
      order: 1;
      align-self: center;
      margin-bottom: 0;

      :nth-child(3) {
        margin-bottom: 10px;
      }
    }
  }
`;

export const InverseRainbowContainer = styled.img`
  width: 200px;
  @media(max-width: 720px) {
    width: 130px;
    align-self: center;
  }
`;
