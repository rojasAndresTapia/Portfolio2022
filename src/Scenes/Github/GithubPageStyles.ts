import { css, SerializedStyles } from '@emotion/react';

export const getGithubHeaderStyles = (): SerializedStyles =>
  css({
    backgroundImage: 'url("../../assets/github-background-black-.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  });
