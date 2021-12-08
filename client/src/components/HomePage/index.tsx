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
  SubtitleOfSubtitleText,
  MainText,
  WebRainbow,
  MobileRainbow,
  Link,
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
          14, 15 e 16 de Janeiro
          <SubtitleOfSubtitleText>
            no Sebrae!
          </SubtitleOfSubtitleText>
        </SubtitleText>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfneYF8AfyohVukIwCTFgBa1Q3mrV8ZKLiVhyCwjWeLAV95XQ/viewform?usp=sf_link">
          <Button>
            <ButtonText>INSCREVA-SE</ButtonText>
          </Button>
        </Link>
        <MainText>
          {description}
        </MainText>
      </ContentContainer>
    </Container>
  );
};
