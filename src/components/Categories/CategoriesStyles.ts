import { css, SerializedStyles } from '@emotion/react';

import githubBB from '../../assets/github-background-black-.jpg';
import githubB from '../../assets/github-background-.jpg';
import designBB from '../../assets/design-background-black.jpg';
import designB from '../../assets/design-background.jpg';
import wordpressBB from '../../assets/wordpress-background-black.jpg';
import wordpressB from '../../assets/wordpress-background.jpg';
import videoBB from '../../assets/video-background-black.jpg';
import videoB from '../../assets/video-background.jpg';

export const getSectionStyles = (): SerializedStyles =>
  css({
    '@media(max-width: 800px)': {
      flexDirection: 'column',
    },
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  });

export const getCategoriesStyles = (categoryName: string): SerializedStyles =>
  css({
    '@media(max-width: 800px)': {
      width: '100%',
    },
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#ffffff',
    height: '35vh',
    textDecoration: 'none',
    ...(categoryName === 'Github' && {
      backgroundImage: `url(../../assets/github-background-black-.jpg)`,
      ':hover': {
        backgroundImage: `url(../../assets/github-background-.jpg)`,
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Design' && {
      backgroundImage: `url(../../assets/design-background-black.jpg)`,
      ':hover': {
        backgroundImage: `url(../../assets/design-background.jpg)`,
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Wordpress' && {
      backgroundImage: `url(../../assets/wordpress-background-black.jpg)`,
      ':hover': {
        backgroundImage: `url(../../assets/wordpress-background.jpg)`,
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Video' && {
      backgroundImage: `url(../../assets/video-background-black.jpg)`,
      ':hover': {
        backgroundImage: `url../../assets/video-background.jpg)`,
        transform: 'scale(1.05)',
      },
    }),
    transition: '0.5s',
    h3: {
      fontFamily: 'Montserrat, sans-serif',
      fontSize: '2em',
      fontWeight: 500,
    },
  });
