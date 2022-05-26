import { css, SerializedStyles } from '@emotion/react';

export const getFormStyles = (): SerializedStyles =>
  css({
    maxWidth: '50%',
    margin: 'auto',
    h1: {
      paddingBottom: '0.5em',
      paddingTop: '1em',
    },
    paddingBottom: '1em',
  });

export const getSubmitButtonStyles = (): SerializedStyles =>
  css({
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
  });
