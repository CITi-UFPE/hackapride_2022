import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    @media (max-width: 720px) {
      font-size: 28px;
    }
  }

  p {
    font-size: 20px;
    margin-top: 24px;
    line-height: 32px;
    @media (max-width: 720px) {
      font-size: 16px;
      margin-top: 0;
    }
  }

  img {
    width: 25%;
  }
`;

export const SlickContainer = styled.div`
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
`;
