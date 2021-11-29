import axios from 'axios';
import React, { useEffect, useState } from 'react';

import {
  Infos,
  Container,
  PartnersPhotos,
  Photo,
} from './style';

import sectionsRainbow from '../../assets/sectionsRainbow.svg';

import { OutsideContainer } from '../../styles/globalComponents';
import { mainUrl } from '../../styles/global';

export const PartnersSection: React.FC = () => {
  const [description, setDescription] = useState('');
  const [partnersPhotos, setPartnersPhotos] = useState([{ url: '' }]);

  const getInfos = async () => {
    const res = await axios.get(`${mainUrl}/partners`);
    const { text, images } = res.data;
    setDescription(text);
    setPartnersPhotos(images);
  };

  useEffect(() => {
    getInfos();
  }, []);

  return (
    <Infos id="Partners">
      <OutsideContainer>
        <Container>
          <img src={sectionsRainbow} alt="rainbow" />
          <h3>Parcerias</h3>
          <p>{description}</p>
          <PartnersPhotos>
            {partnersPhotos.map((photo) => (
              <Photo src={photo.url} />
            ))}
          </PartnersPhotos>
        </Container>
      </OutsideContainer>
    </Infos>
  );
};
