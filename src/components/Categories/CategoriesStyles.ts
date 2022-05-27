import { css, SerializedStyles } from '@emotion/react';
import githubBackgroundBlack from '../../assets/github-background-black-.jpg';
import githubBackground from '../../assets/github-background-.jpg';
import designBackgroundBlack from '../../assets/design-background-black.jpg';
import designBackground from '../../assets/design-background.jpg';
import wordpressBackgroundBlack from '../../assets/wordpress-background-black.jpg';
import wordpressBackground from '../../assets/wordpress-background.jpg';
import videoBackgroundBlack from '../../assets/video-background-black.jpg';
import videoBackground from '../../assets/video-background.jpg';

export const getSectionStyles = (): SerializedStyles =>
  css({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    cursor: 'pointer',
    '@media(max-width: 800px)': {
      flexDirection: 'column',
    },
  });

export const getCategoriesStyles = (categoryName: string): SerializedStyles =>
  css({
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '25%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#ffffff',
    height: '35vh',
    textDecoration: 'none',
    '@media(max-width: 800px)': {
      width: '100%',
    },
    ...(categoryName === 'Github' && {
      backgroundImage: `url(${githubBackgroundBlack})`,
      ':hover': {
        backgroundImage: `url(${githubBackground})`,
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Design' && {
      backgroundImage: `url(${designBackgroundBlack})`,
      ':hover': {
        backgroundImage: `url(${designBackground})`,
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Wordpress' && {
      backgroundImage: `url(${wordpressBackgroundBlack})`,
      ':hover': {
        backgroundImage: `url(${wordpressBackground})`,
        transform: 'scale(1.05)',
      },
    }),
    ...(categoryName === 'Video' && {
      backgroundImage: `url(${videoBackgroundBlack})`,
      ':hover': {
        backgroundImage: `url(${videoBackground})`,
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
