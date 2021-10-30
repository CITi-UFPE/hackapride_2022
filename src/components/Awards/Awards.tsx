/* eslint-disable max-len */
import React from 'react';
import {
  ContainerAwards, StarsWebAwards, StarsMobileAwards, TextBodyAwards, TitleAwards,
  HeaderAwards, SubTitleAwards, ListAwards, ListItemAwards, Description, SupremeTitleAwards,
} from './style';
import {
  StarsMobileLeft, StarsMobileRight, StarsWebLeft, StarsWebRight, Rainbow,
} from '../../assets';

export const Awards: React.FC = () => (
  <ContainerAwards>
    <StarsWebAwards>
      <img src={StarsWebLeft} alt="" width="44px" height="44px" />
    </StarsWebAwards>

    <StarsMobileAwards>
      <img src={StarsMobileLeft} alt="" />
    </StarsMobileAwards>

    <TextBodyAwards>
      <HeaderAwards>

        <SupremeTitleAwards>
          <img src={Rainbow} alt="" />
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

    <StarsMobileAwards>
      <img src={StarsMobileRight} alt="" />
    </StarsMobileAwards>

    <StarsWebAwards>
      <img src={StarsWebRight} alt="" />
    </StarsWebAwards>

  </ContainerAwards>
);
