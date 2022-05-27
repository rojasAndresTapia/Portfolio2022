import { css, SerializedStyles } from '@emotion/react';
import headerBackground from '../../assets/wordpress-background-black.jpg';

export const getWordpressHeaderStyles = (): SerializedStyles =>
  css({
    backgroundImage: `url(${headerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  });

export const getWorksStyles = (): SerializedStyles =>
  css({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    article: {
      width: '40%',
      padding: '1em',
    },
    img: {
      width: '100%',
      boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
    },
  });
