import React from 'react';
import { ColorsBars } from '../../assets';
import {
  Container,
  ContentContainer,
  Image,
  Button,
  ButtonText,
  TitleText,
  SubtitleText,
  MainText,
} from './style';

export const HomePage: React.FC = () => (
  <Container id="Home">
    <ContentContainer>
      <TitleText>
        Se capacite, se empodere,
        <br />
        se permita fazer parte de uma
        <br />
        revolução.
      </TitleText>
      <Image src={ColorsBars} />
      <SubtitleText>
        15, 16 e 17 de janeiro
        <br />
        na casa de Alana!
      </SubtitleText>
      <Button>
        <ButtonText>INSCREVA-SE</ButtonText>
      </Button>
      <MainText>
        Lectus fermentum et morbi viverra nunc, elementum tortor, lacus risus.
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mauris,
        <br />
        amet, justo, pharetra adipiscing praesent nisl. Nullam dignissim vel
        <br />
        accumsan arcu proin neque
      </MainText>
    </ContentContainer>
    {/* <Page>
      <MainTitle>
        Se capacite, se empodere,
        se permita fazer parte de uma
        revolução.
      </MainTitle>
      <RainbowContainer>
        <Rainbow />
        <RainbowBubble />
      </RainbowContainer>
    </Page>
    <DatePage>
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
    </DatePage> */}
  </Container>
);
