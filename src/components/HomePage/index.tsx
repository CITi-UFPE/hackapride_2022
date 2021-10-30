import React from 'react';
import { Container, Rainbow, RainbowContainer } from './style';

export const HomePage: React.FC = () => (
  <Container>
    <div>
      <RainbowContainer>
        <Rainbow />
        <Rainbow />
        <Rainbow />
      </RainbowContainer>
    </div>
  </Container>
);
