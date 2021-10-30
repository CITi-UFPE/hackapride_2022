import React from 'react';
import {
  Container,
  DateTitle,
  HomeButton,
  HomeText,
  MainTitle,
  RainbowContainer,
} from './style';

export const HomePage: React.FC = () => (
  <Container>
    <MainTitle>
      Se capacite, se empodere,
    </MainTitle>
    <MainTitle>
      se permita fazer parte de uma
    </MainTitle>
    <MainTitle>
      revolução.
    </MainTitle>
    <RainbowContainer />
    <DateTitle>
      15, 16 e 17 de janeiro
    </DateTitle>
    <HomeButton>
      Inscreva-se
    </HomeButton>
    <HomeText>
      Lectus fermentum et morbi viverra nunc, elementum tortor,
      lacus risus.  Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. In mauris, amet, justo, pharetra adipiscing praesent nisl.
      Nullam dignissim vel accumsan arcu proin neque
    </HomeText>
  </Container>
);
