import React from 'react';
import Slider from 'react-slick';
import { Container, SlickContainer } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { OutsideContainer } from '../../styles/globalComponents';
import { Logo } from '../../assets';

const album = [
  [Logo, 'foto 01'],
  [Logo, 'foto 02'],
  [Logo, 'foto 03'],
];

export const Guests: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <OutsideContainer style={{ height: '100vh' }}>
      <Container>
        <h1>
          Pessoas Convidadas
        </h1>
        <p>
          As premiações existem com o intuito de. ectus
          fermentum et morbi snecas viverra nunc,
          elementum tortor, lacus risus.
        </p>
        <div style={{ width: '50%' }}>
          <SlickContainer>
            <Slider {...settings}>
              {album?.map((value) => (
                <div
                  key={value[0]}
                  className="guests-card"
                >
                  <img src={value[0]} alt="" />
                  <p>{value[1]}</p>
                </div>
              ))}
            </Slider>
          </SlickContainer>
        </div>
      </Container>
    </OutsideContainer>
  );
};
