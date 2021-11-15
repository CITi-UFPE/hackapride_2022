/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  SectionContainer,
  LogoImage,
  Container,
  TextContainer,
  MenuOption,
  FlowerImage,
  HamburguerContainer,
  HamburguerLines,
} from './style';
import { LogoHackapride, Flower } from '../../assets';
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
  <>
    <SectionContainer>
      <OutsideContainer style={{
        display: 'flex', justifyContent: 'center', maxWidth: '820px', backgroundColor: '#EEDED1', zIndex: 1000,
      }}
      >
        <Container>
          <LogoImage src={LogoHackapride} />
          <HamburguerContainer>
            <input type="checkbox" id="checkbox-menu" />
            <label htmlFor="checkbox-menu">
              <HamburguerLines />
              <HamburguerLines />
              <HamburguerLines />
            </label>
          </HamburguerContainer>
          <TextContainer>
            {options.map((option: {label: string, ref: string, id: number}) => (
              <MenuOption style={{ marginRight: option.id !== options.length - 1 ? '30px' : '0px' }} href={option.ref}>{option.label}</MenuOption>
            ))}
          </TextContainer>
        </Container>
      </OutsideContainer>
    </SectionContainer>
  </>
);
