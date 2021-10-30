import React from 'react';
import {
  FooterContainer,
  FooterText,
  InverseRainbowContainer,
} from './style';

export const Footer: React.FC = () => (
  <FooterContainer>
    <FooterText>
      Copyright © 2021 Codecup
    </FooterText>
    <InverseRainbowContainer />
    <FooterText>
      Made with &lt;/&gt; and &#10084; by CITi
    </FooterText>

  </FooterContainer>
);
