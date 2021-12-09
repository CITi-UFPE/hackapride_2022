import styled from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 8em;

  p {
    width: 35%;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    color: ${theme.colors.black};

    @media(min-width: 2000px) {
      width: 25%;
    }
  }

  img {
    width: 25%;
  }

  @media(max-width: 720px) {
    margin-top: 0;

    p {
      font-size: 16px;
      margin-top: 0;
      width: 80%;
      line-height: 100.4%;
    }
  }
`;

export const Tittle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 45px;
    height: 45px;
  }

  h1 {
    margin-top: -15px;
    font-size: 36px;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    @media (max-width: 720px) {
      font-size: 24px;
    }
  }
`;

export const SlickContainer = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 95%;
  max-width: 1000px;
  .slick-slider {
    display: flex;
    justify-content: center;
  }
  .slick-list {
    width: 100%;
  }  
  button {
    width: 5%;
    background-color: transparent;
    border: none;
    color: transparent;
    cursor: pointer;
  }
  .slick-slider img {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    border-radius: 25px;
    height: 270px;
    width: 100%;
    object-fit: cover;
  }

  @media(max-width: 720px) {
    margin-top: 30px;
  }
`;
