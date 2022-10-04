import React from 'react';

import { IWorksProps } from '../utils/interfaceWorks';

import { getGithubHeaderStyles } from './GithubPageStyles';
import Button from '@mui/material/Button';
import {
  getButtonStyles,
  getHeaderStyles,
  getMainStyles,
  getNameStyles,
  getWorksStyles,
} from '../../styles/styles';
import { works } from '../../api/Data/works';
import image from '../../assets/images.js';

export const GithubPage: React.FC = () => {
  const filterData = (obj) => obj.category === 'github';
  const [githubWorks, setGithubWorks] = React.useState<IWorksProps[]>(
    works.filter(filterData)
  );
  return (
    <>
      <header css={[getHeaderStyles, getGithubHeaderStyles]}>
        <h2>GITHUB</h2>
      </header>
      <main css={getMainStyles}>
        <p>
          Below is the button that will direct you to my Github account, where I
          am gradually uploading exercises, as well as small projects that I am
          creating. Also below you will find some of my projects.
        </p>
      </main>
      <div css={getButtonStyles}>
        <Button
          onClick={() =>
            window.open('https://github.com/rojasAndresTapia', '_blank')
          }
          variant="outlined"
        >
          Github
        </Button>
      </div>
      <section css={getWorksStyles}>
        {githubWorks.map((work, index) => {
          // const img = new URL(work.image, import.meta.url);
          // console.log('#', img, '##', work.image, '###', import.meta.url);
          return (
            <article key={index}>
              <h3 css={getNameStyles}>{work.name}</h3>
              <a href={work.url} target="_blank" rel="noopener noreferrer">
                <img src={image[work.image]} />
              </a>
            </article>
          );
        })}
      </section>
    </>
  );
};
