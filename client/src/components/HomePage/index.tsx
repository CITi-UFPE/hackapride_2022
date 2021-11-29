import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { mainUrl } from '../../styles/global';
import {
  Container,
  ContentContainer,
  Button,
  ButtonText,
  TitleText,
  SubtitleText,
  MainText,
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
      <ContentContainer>
        <TitleText>
          Se capacite, se empodere,
          <br />
          se permita fazer parte de uma
          <br />
          revolução.
        </TitleText>
        <WebRainbow src={WebRainbowPhoto} />
        <MobileRainbow src={MobileRainbowPhoto} />
        <SubtitleText>
          15, 16 e 17 de janeiro
          <br />
          na casa de Alana!
        </SubtitleText>
        <Button>
          <ButtonText>INSCREVA-SE</ButtonText>
        </Button>
        <MainText>
          {description}
        </MainText>
      </ContentContainer>
    </Container>
  );
};
