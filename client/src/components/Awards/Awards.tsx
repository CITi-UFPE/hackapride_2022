/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container, ContainerAwards, TextBodyAwards, TitleAwards, AwardsContainer,
  HeaderAwards, SubTitleAwards, ListAwards, ListItemAwards, Description, SupremeTitleAwards,
  RainbowImage, StarWebImage, SubTitleAwardsMobile, StarMobileImage,
} from './style';
import {
  Rainbow,
  StarsMobileLeft,
  StarsMobileRight,
  StarsWebLeft,
  StarsWebRight,
} from '../../assets';
import { mainUrl } from '../../styles/global';

export const Awards: React.FC = () => {
  const [description, setDescription] = useState('');

  const getImages = async () => {
    const res = await axios.get(`${mainUrl}/awards`);
    const { text } = res.data;
    setDescription(text);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (

    <Container>
      <ContainerAwards id="Awards">
        <TextBodyAwards>
          <HeaderAwards>
            <SupremeTitleAwards>
              <RainbowImage src={Rainbow} />
              Premiações
            </SupremeTitleAwards>
            <SubTitleAwards>
              {description}
            </SubTitleAwards>
          </HeaderAwards>
          <ListAwards>
            <StarWebImage src={StarsWebLeft} />
            <StarMobileImage src={StarsMobileLeft} />
            <AwardsContainer>
              <ListItemAwards>
                <TitleAwards>
                  1º Lugar
                </TitleAwards>
                <Description>
                  Lectus fermentum et morbi viverra nunc, elementum tortor, lacus risus.  Lorem ipsum.
                </Description>
              </ListItemAwards>
              <ListItemAwards>
                <TitleAwards>
                  2º Lugar
                </TitleAwards>
                <Description>
                  Lectus fermentum et morbi viverra nunc, elementum tortor, lacus risus.  Lorem ipsum.
                </Description>
              </ListItemAwards>
              <ListItemAwards>
                <TitleAwards>
                  3º Lugar
                </TitleAwards>
                <Description>
                  Lectus fermentum et morbi viverra nunc, elementum tortor, lacus risus.  Lorem ipsum.
                </Description>
              </ListItemAwards>
            </AwardsContainer>
            <StarMobileImage src={StarsMobileRight} />
            <StarWebImage src={StarsWebRight} />
          </ListAwards>
        </TextBodyAwards>
      </ContainerAwards>
      <SubTitleAwardsMobile>
        {description}
      </SubTitleAwardsMobile>
    </Container>

  );
};
