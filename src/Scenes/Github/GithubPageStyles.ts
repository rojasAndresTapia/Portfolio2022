import { css, SerializedStyles } from '@emotion/react';
import headerBackground from '../../assets/github-background-black-.jpg';

export const getGithubHeaderStyles = (): SerializedStyles =>
  css({
    backgroundImage: `url(${headerBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  });

  export const getProjectsStyles = (): SerializedStyles =>
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
