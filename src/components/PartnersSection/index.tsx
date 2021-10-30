import React from 'react';

import {
  Infos,
  Container,
  PartnersPhotos,
  Photo,
  FirstLine,
  SecondLine,
} from './style';

import sectionsRainbow from '../../assets/sectionsRainbow.svg';

import { OutsideContainer } from '../../styles/globalComponents';

export const PartnersSection: React.FC = () => (
  <Infos>
    <OutsideContainer>
      <Container>
        <img src={sectionsRainbow} alt="rainbow" />
        <h3>Parcerias</h3>
        <p>
          Ectus fermentum et morbi snecas viverra nunc,
          elementum tortor,acus risus.  Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.In mauris, amet, justo,
          pharetra adipiscing praesent nisl. Nullam dignissim
          vel accumsan arcu proin neque vel cras.
        </p>
        <PartnersPhotos>
          <FirstLine>
            <Photo />
            <Photo />
            <Photo />
            <Photo />
          </FirstLine>
          <SecondLine>
            <Photo />
            <Photo />
            <Photo />
            <Photo />
          </SecondLine>
        </PartnersPhotos>
      </Container>
    </OutsideContainer>
  </Infos>
);
