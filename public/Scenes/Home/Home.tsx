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
          I am a Front End Developer / Graphic Designer from Chile. I studied
          Hotel Management in Santiago, and after my first work experience in
          the experience in the HR area, I decided to travel and open my mind to
          new opportunities. Since 2010, I have been living in Spain. I have
          worked in different projects designing webs, corporate image, digital
          image and video. In my current job, i am responsible for the area of
          design and support of a company that has developed a software for
          construction and installation companies, facilitating their digital
          transformation process. Currently, I am expanding my competences in
          the area of web development through Lemoncode's Front End Master.
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
