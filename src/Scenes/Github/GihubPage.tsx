import React from 'react';
import { getGithubHeaderStyles } from './GithubPageStyles';
import Button from '@mui/material/Button';
import {
  getButtonStyles,
  getHeaderStyles,
  getMainStyles,
} from '../../styles/styles';

export const GithubPage: React.FC = () => {
  return (
    <>
      <header css={[getHeaderStyles, getGithubHeaderStyles]}>
        <h2>GITHUB</h2>
      </header>
      <main css={getMainStyles}>
        <p>
          Below is the button that will direct you to my Github repository,
          where little by little I am uploading exercises from my Bootcamp, as
          well as small projects that I am creating.
        </p>
      </main>
      <div css={getButtonStyles}>
        <Button
          onClick={() =>
            window.open('https://github.com/rojasAndresTapia', '_blank')
          }
          variant='outlined'
        >
          Github
        </Button>
      </div>
    </>
  );
};
