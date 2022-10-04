import { css, SerializedStyles } from '@emotion/react';
import headerBackground from '../../assets/design-background-black.jpg';

export const getDesignHeaderStyles = (): SerializedStyles =>
  css({
    backgroundImage: `url(${headerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  });
