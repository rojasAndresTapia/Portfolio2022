import { css, SerializedStyles } from '@emotion/react';

export const getFooterSectionStyles = (): SerializedStyles =>
  css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25vh',
    backgroundColor: 'rgba(0, 66, 78, 0.7)',
    img: {
      maxHeight: '15vh',
      maxWidth: '80%',
      padding: '1em',
      '@media(max-width: 800px)': {
        maxHeight: '10vh',
        marginTop: '2em',
      },
    },
    '@media(max-width: 800px)': {
      flexDirection: 'column',
      height: '28vh',
    },
  });

export const getPersonalDataSectionStyles = (): SerializedStyles =>
  css({
    fontSize: '1.2em',
    fontFamily: 'Montserrat, sans-serif',
    margin: '0.5em',
    color: '#ffffff',
    letterSpacing: '1.5px',
    '@media(max-width: 800px)': {
      maxWidth: '75%',
      textAlign: 'center',
      fontSize: '0.8em',
      paddingBottom: '2em',
    },
  });
