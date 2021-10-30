import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Infos = styled.div`
  h3 {
    font-size: 28px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.sectionTitle};
    margin: -20px;
  }

  p {
    width: 60%;
    margin-top: 35px;
  }

 text-align: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
