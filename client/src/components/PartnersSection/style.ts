import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Infos = styled.div`
  margin: 10em 0 15em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  color: ${theme.colors.black};

  h3 {
    font-size: 36px;
    font-weight: 600;
    margin: -20px;
  }

  p {
    font-size: 20px;
    width: 60%;
    margin-top: 35px;
  }

 text-align: center;

 @media(max-width: 420px) {
  p {
    width: 80%;
    font-size: 16px;
  }

  h3 {
    font-size: 24px;
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
