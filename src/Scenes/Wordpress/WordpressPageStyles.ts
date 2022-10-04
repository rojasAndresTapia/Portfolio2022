import { css, SerializedStyles } from '@emotion/react';
import headerBackground from '../../assets/wordpress-background-black.jpg';

export const getWordpressHeaderStyles = (): SerializedStyles =>
  css({
    backgroundImage: `url(${headerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  });
