import React from 'react';
import Slider from 'react-slick';
import { Container } from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { OutsideContainer } from '../../styles/globalComponents';

const album = [['1', 'a'], ['2', 'b'], ['2', 'c']];

export const Guests: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <OutsideContainer>
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
          <Slider {...settings}>
            {album?.map((index) => (
              <div key={index[0]} className="guests-card">
                {index[1]}
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </OutsideContainer>
  );
};
