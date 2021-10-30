/* eslint-disable max-len */
import React from 'react';
import {
  ContainerAwards, StarsWebAwards, StarsMobileAwards, TextBodyAwards, TitleAwards,
  HeaderAwards, SubTitleAwards,
} from './style';
import {
  StarsMobileLeft, StarsMobileRight, StarsWebLeft, StarsWebRight,
} from '../../assets';

export const Awards: React.FC = () => (
  <ContainerAwards>
    <StarsWebAwards>
      <img src={StarsWebLeft} alt="" />
    </StarsWebAwards>

    <StarsMobileAwards>
      <img src={StarsMobileLeft} alt="" />
    </StarsMobileAwards>

    <TextBodyAwards>
      <HeaderAwards>
        <TitleAwards>
          Premiações
        </TitleAwards>
        <SubTitleAwards>
          As premiações existem com o intuito de. ectus fermentum et morbi snecas viverra nunc, elementum tortor, lacus risus.
        </SubTitleAwards>
      </HeaderAwards>

      <div className="ListAwards">
        <div className="ListItemAwards">
          <div className="TitleAwards">
            1º Lugar
          </div>
          <div className="Description">
            Lectus fermentum et morbi viverra nunc, elementum tortor, lacus risus.  Lorem ipsum.
          </div>
        </div>

        <div className="ListItemAwards">
          <div className="TitleAwards">
            2º Lugar
          </div>
          <div className="Description">
            Lectus fermentum et morbi viverra nunc, elementum tortor, lacus risus.  Lorem ipsum.
          </div>
        </div>

        <div className="ListItemAwards">
          <div className="TitleAwards">
            3º Lugar
          </div>
          <div className="Description">
            Lectus fermentum et morbi viverra nunc, elementum tortor, lacus risus.  Lorem ipsum.
          </div>
        </div>

      </div>
    </TextBodyAwards>

    <StarsMobileAwards>
      <img src={StarsMobileRight} alt="" />
    </StarsMobileAwards>

    <StarsWebAwards>
      <img src={StarsWebRight} alt="" />
    </StarsWebAwards>

  </ContainerAwards>
);
