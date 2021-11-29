/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import {
  SectionContainer,
  LogoImage,
  Container,
  TextContainer,
  MenuOption,
  HamburguerContainer,
  HamburguerLines,
  HamburguerOptionsContainer,
  HamburguerOptions,
  HamburguerButton,
  ButtonText,
  FlowerContainer,
  FlowerImage,
} from './style';
import { LogoHackapride, NavbarFlower } from '../../assets';
import { OutsideContainer } from '../../styles/globalComponents';

const options = [
  {
    label: 'INFORMAÇÕES',
    ref: '#Awards',
    id: 0,
  },
  {
    label: 'CONVIDADOS',
    ref: '#Guests',
    id: 1,
  },
  {
    label: 'PARCEIROS',
    ref: '#Partners',
    id: 2,
  },
  {
    label: 'CONTATO',
    ref: '#Contact',
    id: 3,
  },
];

export const Navbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  const BackToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <SectionContainer>
        <OutsideContainer style={{
          display: 'flex', justifyContent: 'center', maxWidth: '820px', backgroundColor: '#EEDED1', zIndex: 1000,
        }}
        >
          <Container>
            <LogoImage src={LogoHackapride} onClick={() => BackToTop()} />
            <HamburguerContainer>
              <input type="checkbox" id="checkbox-menu" checked={toggle} onClick={() => setToggle(!toggle)} />
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
        {toggle && (
        <HamburguerOptionsContainer>
          {options.map((option: {label: string, ref: string, id: number}) => (
            <HamburguerOptions onClick={() => setToggle(false)} style={{ marginTop: option.id === 0 ? '40px' : '70px' }} href={option.ref}>{option.label}</HamburguerOptions>
          ))}
          <HamburguerButton>
            <ButtonText>INSCREVA-SE</ButtonText>
          </HamburguerButton>
          <FlowerContainer>
            <FlowerImage src={NavbarFlower} />
          </FlowerContainer>
        </HamburguerOptionsContainer>
        )}
      </SectionContainer>
    </>
  );
};
