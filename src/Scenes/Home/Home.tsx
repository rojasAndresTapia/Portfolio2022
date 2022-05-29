import { Button } from '@mui/material';
import React from 'react';
import { getButtonStyles, getMainStyles } from '../../styles/styles';
import {
  getHeaderStyles,
  getNameStyles,
  getSubTitleStyles,
} from './HomeStyles';

export const Home: React.FC = () => {
  return (
    <>
      <header css={getHeaderStyles}>
        <h1 css={getNameStyles}>
          <span>ANDRÉS </span>
          <span>ROJAS</span>
        </h1>
        <h2 css={getSubTitleStyles}>
          <span>FRONT </span>
          <span>END </span>
          <span>DEVELOPER</span>
        </h2>
      </header>
      <main css={getMainStyles}>
        <h2>ABOUT ME</h2>
        <p>
          I am a Front End Developer coming from the Graphic Design area. I'm
          from Chile and since 2009 I live in Spain. I have worked in different
          projects of web design, corporate image, digital image and video. In
          the last project I was involved, I was responsible for the design and
          support area in a startup that has developed a software for
          construction and installation companies, facilitating their digital
          transformation process.
        </p>
        <p>
          Currently, I am expanding my skills in the area of web development
          through the Lemoncode Front End Master that I am about to finish. Also
          with personal projects like this portfolio, configured with
          <strong> Webpack</strong>, developed with <strong>React</strong>,
          typed with
          <strong> Typescript</strong>, styled with <strong>Emotion</strong> and
          published with <strong>Github Action</strong>.
        </p>
      </main>
      <div css={getButtonStyles}>
        <Button
          onClick={() =>
            window.open(
              'https://drive.google.com/file/d/1JuBL8WUdVSnqTiAemJUUzF1vug4w_id5/view?usp=sharing',
              '_blank'
            )
          }
          variant='outlined'
        >
          Download CV
        </Button>
      </div>
    </>
  );
};
