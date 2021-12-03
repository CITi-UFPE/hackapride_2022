import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import { Container, SlickContainer, Tittle } from './style';
import { Rainbow } from '../../assets';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { mainUrl } from '../../styles/global';

export const Guests: React.FC = () => {
  const [description, setDescription] = useState('');
  const [slickPhotos, setSlickPhotos] = useState([{ url: '', caption: '' }]);

  const getInfos = async () => {
    const res = await axios.get(`${mainUrl}/guests`);
    const { text, images } = res.data;
    setDescription(text);
    setSlickPhotos(images);
  };

  useEffect(() => {
    getInfos();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container id="Guests">
      <Tittle>
        <img src={Rainbow} alt="rainbow" />
        <h1>Pessoas Convidadas</h1>
      </Tittle>
      <p>
        {description}
      </p>
      <div style={{ width: '50%' }}>
        <SlickContainer>
          <Slider {...settings}>
            {slickPhotos?.map((value) => (
              <div
                key={value.url}
                className="guests-card"
              >
                <img src={value.url} alt="" />
                <p>{value.caption}</p>
              </div>
            ))}
          </Slider>
        </SlickContainer>
      </div>
    </Container>
  );
};
