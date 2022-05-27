import React from 'react';
import axios from 'axios';
import {
  getWordpressHeaderStyles,
  getWorksStyles,
} from './WordpressPageStyles';
import { IWorksProps } from '../utils/interfaceWorks';
import { getHeaderStyles, getMainStyles } from '../../styles/styles';
import { works } from '../../api/Data/works';

import image from '../../assets/images.js';

export const WordpressPage: React.FC = () => {
  const filterData = (obj) => obj.category === 'wordpress';
  const [wordpressWorks, setWordpressWorks] = React.useState<IWorksProps[]>(
    works.filter(filterData)
  );

  // React.useEffect(() => {
  //   axios.get('../../api/Data/works.json').then((res) => {
  //     const filterData = res.data.filter((obj) => obj.category === 'wordpress');
  //     setWordpressWorks(filterData);
  //     console.log(res);
  //   });
  // }, []);

  return (
    <>
      <header css={[getHeaderStyles, getWordpressHeaderStyles]}>
        <h2>WORDPRESS</h2>
      </header>
      <main css={getMainStyles}>
        <p>
          Here you can find some webs made for different clients using Wordpress
        </p>

        <section css={getWorksStyles}>
          {wordpressWorks.map((work, index) => (
            <article key={index}>
              <h3>{work.name}</h3>
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
