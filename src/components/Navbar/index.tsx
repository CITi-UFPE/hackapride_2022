import React from 'react';
import { SectionContainer, LogoImage, Container } from './style';
import { LogoHackapride } from '../../assets';
import { OutsideContainer } from '../../styles/globalComponents';

export const Navbar: React.FC = () => (
  <SectionContainer>
    <OutsideContainer>
      <Container>
        <LogoImage src={LogoHackapride} />
      </Container>
    </OutsideContainer>
  </SectionContainer>
);
