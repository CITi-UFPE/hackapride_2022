import React from 'react';
import {
  SectionContainer, LogoImage, Container, TextContainer, MenuOption,
} from './style';
import { LogoHackapride } from '../../assets';
import { OutsideContainer } from '../../styles/globalComponents';

const options = [
  {
    label: 'INFORMAÇÕES',
    id: 0,
  },
  {
    label: 'CONVIDADOS',
    id: 1,
  },
  {
    label: 'PARCEIROS',
    id: 2,
  },
  {
    label: 'CONTATO',
    id: 3,
  },
];

export const Navbar: React.FC = () => (
  <SectionContainer>
    <OutsideContainer>
      <Container>
        <LogoImage src={LogoHackapride} />
        <TextContainer>
          {options.map((option: {label: string}) => (
            <MenuOption>{option.label}</MenuOption>
          ))}
        </TextContainer>
      </Container>
    </OutsideContainer>
  </SectionContainer>
);
