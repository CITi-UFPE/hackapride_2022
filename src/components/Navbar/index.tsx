import React from 'react';
import {
  SectionContainer, LogoImage, Container, TextContainer, MenuOption, HamburguerLines, Lines,
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
    <OutsideContainer style={{ display: 'flex', justifyContent: 'center', maxWidth: '820px' }}>
      <Container>
        <LogoImage src={LogoHackapride} />
        <HamburguerLines>
          <Lines />
          <Lines />
          <Lines />
        </HamburguerLines>
        <TextContainer>
          {options.map((option: {label: string, ref: string, id: number}) => (
            <MenuOption style={{ marginRight: option.id !== options.length - 1 ? '30px' : '0px' }} href={option.ref}>{option.label}</MenuOption>
          ))}
        </TextContainer>
      </Container>
    </OutsideContainer>
  </SectionContainer>
);
