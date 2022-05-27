import React from 'react';

import {
  getFooterSectionStyles,
  getPersonalDataSectionStyles,
} from './FooterStyles';
import logo from '../../assets/logo.png';

export const Footer: React.FC = () => {
  return (
    <section css={getFooterSectionStyles}>
      <img src={logo} />
      <div css={getPersonalDataSectionStyles}>
        <p>rojas.tapia.andres@gmail.com</p>
        <p>646165440</p>
      </div>
    </section>
  );
};
