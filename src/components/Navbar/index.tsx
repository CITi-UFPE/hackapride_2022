import React from 'react';
import {
  SectionContainer, LogoImage, Container, TextContainer, MenuOption,
} from './style';
import { LogoHackapride } from '../../assets';
import { OutsideContainer } from '../../styles/globalComponents';

const options = [
  {
    label: 'INFORMAÇÕES',
    ref: '',
    id: 0,
  },
  {
    label: 'CONVIDADOS',
    ref: '',
    id: 1,
  },
  {
    label: 'PARCEIROS',
    ref: '',
    id: 2,
  },
  {
    label: 'CONTATO',
    ref: '',
    id: 3,
  },
];

export const Navbar: React.FC = () => (
  <SectionContainer>
    <OutsideContainer>
      <Container>
        <LogoImage src={LogoHackapride} />
        <TextContainer>
          {options.map((option: {label: string, ref: string}) => (
            <MenuOption href={option.ref}>{option.label}</MenuOption>
          ))}
        </TextContainer>
      </Container>
    </OutsideContainer>
  </SectionContainer>
);
