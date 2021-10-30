import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Infos = styled.div`
  h3 {
    font-size: 28px;
    font-weight: 600;
    color: ${(props) => props.theme.colors.black};
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
  flex-wrap: wrap;
`;

export const PartnersPhotos = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-areas:
              "p p p p"
              "p p p p";
  gap: 2em 5em;
`;

export const Photo = styled.div`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.grey};
`;