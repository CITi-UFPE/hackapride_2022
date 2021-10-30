/* eslint-disable max-len */
import React from 'react';
import {
  ContainerAwards, StarsWebAwards, StarsMobileAwards, TextBodyAwards, TitleAwards,
  HeaderAwards, SubTitleAwards, ListAwards, ListItemAwards, Description, SupremeTitleAwards,
  RainbowImage, StarWebImage,
} from './style';
import {
  StarsMobileLeft, StarsMobileRight, StarsWebLeft, StarsWebRight, Rainbow,
} from '../../assets';

export const Awards: React.FC = () => (
  <ContainerAwards>
    <StarWebImage src={StarsWebLeft} />

    {/* <StarsMobileAwards>
      <img src={StarsMobileLeft} alt="" />
    </StarsMobileAwards> */}

    <TextBodyAwards>
      <HeaderAwards>

        <SupremeTitleAwards>
          <RainbowImage src={Rainbow} />
          Premiações
        </SupremeTitleAwards>
        <SubTitleAwards>
          As premiações existem com o intuito de. ectus fermentum et morbi snecas viverra nunc, elementum tortor, lacus risus.
        </SubTitleAwards>
      </HeaderAwards>

      <ListAwards>
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

      </ListAwards>
    </TextBodyAwards>

    {/* <StarsMobileAwards>
      <img src={StarsMobileRight} alt="" />
    </StarsMobileAwards> */}

    <StarWebImage src={StarsWebRight} />

  </ContainerAwards>
);
