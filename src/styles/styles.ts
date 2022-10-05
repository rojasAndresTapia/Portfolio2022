import { css, SerializedStyles } from '@emotion/react';

export const getHeaderStyles = (): SerializedStyles =>
  css({
    margin: 0,
    padding: 0,
    height: '25vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    h2: {
      fontFamily: 'Montserrat, sans-serif',
      margin: 0,
      fontSize: '2em',
      color: '#ffffff',
      letterSpacing: '3px',
      fontWeight: 700,
    },
  });

export const getMainStyles = (): SerializedStyles =>
  css({
    '@media(max-width: 800px)': {
      maxWidth: '75%',
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '80%',
    margin: 'auto',
    paddingTop: '7vh',
    paddingBottom: '7vh',
    fontFamily: 'Montserrat, sans-serif',
    p: {
      fontSize: '1.1rem',
      color: '#45434C',
      fontWeight: 500,
      letterSpacing: '2px',
      marginBottom: 0,
      lineHeight: '1.7em',
    },
    h2: {
      fontSize: '2rem',
      letterSpacing: '2px',
      fontWeight: 700,
      marginTop: 0,
      paddingTop: '5vh',
      paddingBottom: '5vh',
    },
  });

export const getNameStyles = (): SerializedStyles =>
  css({
    marginBottom: '5vh',
    marginTop: '5vh',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    fontSize: '1.1rem',
  });

export const getButtonStyles = (): SerializedStyles =>
  css({
    display: 'flex',
    justifyContent: 'flex-end',
    maxWidth: '80%',
    margin: 'auto',
    paddingBottom: '7vh',
    Button: {
      backgroundColor: 'rgba(0, 66, 78, 0.3)',
      color: 'rgba(0, 66, 78, 0.7)',
      borderColor: 'rgba(0, 66, 78, 0.7)',
      paddingLeft: '2%',
      paddingRight: '2%',
      ':hover': {
        backgroundColor: 'rgba(0, 66, 78, 0.7)',
        color: '#ffffff',
        borderColor: '#ffffff',
      },
    },
    '@media(max-width: 800px)': {
      justifyContent: 'center',
    },
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
      transition: '0.5s',
      ':hover': {
        transform: 'scale(1.03)',
      }
    },
    img: {
      width: '100%',
      transition: '0.5s',
      boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      ':hover': {
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
      }
    },
  });
