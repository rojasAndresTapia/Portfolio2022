import React from 'react';
import axios from 'axios';

import { IWorksProps } from '../utils/interfaceWorks';
import { getVideoHeaderStyles, getWorksStyles } from './VideoPageStyles';
import {
  getHeaderStyles,
  getMainStyles,
  getNameStyles,
} from '../../styles/styles';

import { works } from '../../api/Data/works';
import image from '../../assets/images.js';

export const VideoPage: React.FC = () => {
  const filterData = (obj) => obj.category === 'video';
  const [videoWorks, setVideoWorks] = React.useState<IWorksProps[]>(
    works.filter(filterData)
  );

  // React.useEffect(() => {
  //   axios.get('../../api/Data/works.json').then((res) => {
  //     const filterData = res.data.filter((obj) => obj.category === 'video');
  //     setVideoWorks(filterData);
  //     console.log(filterData);
  //   });
  // }, []);
  return (
    <>
      <header css={[getHeaderStyles, getVideoHeaderStyles]}>
        <h2>VIDEO</h2>
      </header>
      <main css={getMainStyles}>
        <p>
          Here you can find some video edition i did in my previous company work
        </p>
        <section css={getWorksStyles}>
          {videoWorks.map((work, index) => (
            <article key={index}>
              <h3 css={getNameStyles}>{work.name}</h3>
              <a href={work.url} target='_blank' rel='noopener noreferrer'>
                <img src={image[work.image]} />
              </a>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};
