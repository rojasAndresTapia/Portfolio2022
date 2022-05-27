import { css, SerializedStyles } from '@emotion/react';
import headerBackground from '../../assets/github-background-black-.jpg';

export const getGithubHeaderStyles = (): SerializedStyles =>
  css({
    backgroundImage: `url(${headerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  });
