import { css, SerializedStyles, keyframes } from '@emotion/react';

export const getHeaderStyles = (): SerializedStyles =>
  css({
    fontFamily: 'Montserrat, sans-serif',
    height: '75vh',
    backgroundImage: `url(../../assets/header-background.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      backgroundImage: `url(../../assets/header-background-image.png)`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    transition: '0.8s',

    h2: {
      fontSize: '2em',
      color: '#ffffff',
      letterSpacing: '2px',
      fontWeight: 500,
      marginTop: 0,
      // transform: 'scale(0.93)',
      // animation: 'scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1)',
    },
  });

const scale = keyframes({
  '0%': { transform: 'scale(0.93)' },

  '100%': { transform: 'scale(1)' },
});

const fadeIn = keyframes({
  '0%': { filter: 'blur(4px)' },
  '100%': { opacity: 1, filter: 'blur(0)' },
});

export const getNameStyles = (): SerializedStyles =>
  css({
    fontSize: '3em',
    color: '#ffffff',
    fontWeight: 700,
    letterSpacing: '4px',
    marginBottom: 0,
    display: 'inline - block',
    animation: `${scale} 3s forwards cubic-bezier(0.5, 1, 0.89, 1)`,
    'span:nth-child(1)': {
      opacity: 0,
      animation: `${fadeIn} 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0)`,
    },
    'span:nth-child(2)': {
      opacity: 0,
      animation: `${fadeIn} 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0)`,
    },
  });

export const getSubTitleStyles = (): SerializedStyles =>
  css({
    fontSize: '3em',
    color: '#ffffff',
    fontWeight: 700,
    letterSpacing: '4px',
    marginBottom: 0,
    display: 'inline - block',
    animation: `${scale} 3s forwards cubic-bezier(0.5, 1, 0.89, 1)`,
    'span:nth-child(1)': {
      opacity: 0,
      animation: `${fadeIn} 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0)`,
    },
    'span:nth-child(2)': {
      opacity: 0,
      animation: `${fadeIn} 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0)`,
    },
    'span:nth-child(3)': {
      opacity: 0,
      animation: `${fadeIn} 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0)`,
    },
  });
