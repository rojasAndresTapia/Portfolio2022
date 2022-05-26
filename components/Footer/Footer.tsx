import React from 'react';

import { getFooterSectionStyles } from './FooterStyles';
import logo from '../../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <section css={getFooterSectionStyles}>
      <img src={logo} />
      <div>
        <p>rojas.tapia.andres@gmail.com</p>
        <p>646165440</p>
      </div>
    </section>
  );
};
