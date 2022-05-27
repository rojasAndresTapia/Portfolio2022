import React from 'react';
import axios from 'axios';

import { IWorksProps } from '../utils/interfaceWorks';

import { getDesignHeaderStyles, getWorksStyles } from './DesignPageStyles';
import { getHeaderStyles, getMainStyles } from '../../styles/styles';

import image from '../../assets/images.js';

export const DesignPage: React.FC = () => {
  const [designWorks, setDesignWorks] = React.useState<IWorksProps[]>([]);

  React.useEffect(() => {
    axios.get('/api/Data/works.json').then((res) => {
      const filterData = res.data.filter((obj) => obj.category === 'design');
      setDesignWorks(filterData);
      console.log(filterData);
    });
  }, []);
  return (
    <>
      <header css={[getHeaderStyles, getDesignHeaderStyles]}>
        <h2>DESIGN</h2>
      </header>
      <main css={getMainStyles}>
        <p>Here you can find some of my work</p>
        <section css={getWorksStyles}>
          {designWorks.map((work, index) => {
            const img = new URL(work.image, import.meta.url);
            console.log('#', img, '##', work.image, '###', import.meta.url);
            return (
              <article key={index}>
                <h3>{work.name}</h3>
                <a href={work.url} target='_blank' rel='noopener noreferrer'>
                  <img src={image[work.image]} />
                </a>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
};
