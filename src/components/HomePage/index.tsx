import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { mainUrl } from '../../styles/global';
import {
  Container,
  DateTitle,
  HomeButton,
  HomeText,
  MainTitle,
  MainPage,
  DatePage,
  WebRainbow,
  MobileRainbow,
} from './style';

import WebRainbowPhoto from '../../assets/web-rainbow.png';
import MobileRainbowPhoto from '../../assets/mobile-rainbow.png';

export const HomePage: React.FC = () => {
  const [description, setDescription] = useState('');

  const getDescription = async () => {
    const res = await axios.get(`${mainUrl}/banner`);
    const { text } = res.data;
    setDescription(text);
  };

  useEffect(() => {
    getDescription();
  }, []);

  return (
    <Container id="Home">
      <MainPage>
        <MainTitle>
          Se capacite, se empodere,
          se permita fazer parte de uma
          revolução.
        </MainTitle>
        <WebRainbow src={WebRainbowPhoto} />
        <MobileRainbow src={MobileRainbowPhoto} />
      </MainPage>
      <DatePage>
        <DateTitle>
          15, 16 e 17 de janeiro
        </DateTitle>
        <HomeButton>
          Inscreva-se
        </HomeButton>
        <HomeText>
          {description}
        </HomeText>
      </DatePage>
    </Container>
  );
};
