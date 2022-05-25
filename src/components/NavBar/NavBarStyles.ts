import { css, SerializedStyles } from '@emotion/react';

export const getHeaderLogoStyles = (): SerializedStyles =>
  css({
    maxWidth: '50px',
  });

export const getNavBarStyles = (): SerializedStyles =>
  css({
    backgroundColor: 'rgba(0, 66, 78, 0.5)',
  });
