import React from 'react';
import {
  MainContainer,
  ImageContainer,
  FormContainer,
  LogoContainer,
  Container,
  Title,
  ImageFormContainer,
} from './style';
import { LogoHacka } from '../../assets';
import { OutsideContainer } from '../../styles/globalComponents';

export const Contact: React.FC = () => (
  <Container>
    <OutsideContainer>
      <MainContainer>
        <Title>Não saia sem mandar uma mensagem para a gente!</Title>
        <ImageFormContainer>
          <ImageContainer>
            <LogoContainer src={LogoHacka} />
          </ImageContainer>
          <FormContainer>
            <p>oi</p>
          </FormContainer>
        </ImageFormContainer>
      </MainContainer>
    </OutsideContainer>
  </Container>
);
