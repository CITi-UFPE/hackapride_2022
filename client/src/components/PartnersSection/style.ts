import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Infos = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  h3 {
    font-size: 28px;
    font-weight: 600;
    color: ${theme.colors.black};
    margin: -20px;
  }

  p {
    width: 60%;
    margin-top: 35px;
  }

 text-align: center;

 @media(max-width: 420px) {
  p {
    width: 80%;
  }
 }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PartnersPhotos = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-areas:
    "p p p p"
    "p p p p";
  gap: 2em 5em;

  @media(max-width: 720px) {
    grid-template-areas:
      "p p"
      "p p"
      "p p"
      "p p";
  }

  @media(max-width: 420px) {
    gap: 1em 3em;
  }
`;

export const Photo = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;

  @media(max-width: 420px) {
    width: 70px;
    height: 70px;
  }
`;
