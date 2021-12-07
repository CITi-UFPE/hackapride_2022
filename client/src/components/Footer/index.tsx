import React from 'react';
import {
  FooterContainer,
  InverseRainbowContainer,
} from './style';

import InvertedRainbow from '../../assets/inverted-rainbow.png';

export const Footer: React.FC = () => (
  <FooterContainer>
    <p>Copyright © 2021 Codecup</p>
    <InverseRainbowContainer src={InvertedRainbow} />
    <p>Made with &lt;/&gt; and &#10084; by CITi</p>
  </FooterContainer>
);
