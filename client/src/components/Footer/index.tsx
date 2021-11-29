import React from 'react';
import {
  FooterContainer,
  FooterText,
  InverseRainbowContainer,
} from './style';

import InvertedRainbow from '../../assets/inverted-rainbow.png';

export const Footer: React.FC = () => (
  <FooterContainer>
    <FooterText>
      Copyright © 2021 Codecup
    </FooterText>
    <InverseRainbowContainer src={InvertedRainbow} />
    <FooterText>
      Made with &lt;/&gt; and &#10084; by CITi
    </FooterText>

  </FooterContainer>
);
