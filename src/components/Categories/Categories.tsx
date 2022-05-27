import React from 'react';
import axios from 'axios';
import { getCategoriesStyles, getSectionStyles } from './CategoriesStyles';
import { categories } from '../../api/Data/categories';
import { useNavigate } from 'react-router-dom';

interface Categories {
  name: string;
  url: string;
  backgroundImage: string;
  backgroundImageHover: string;
}

export const Categories: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section css={getSectionStyles}>
      {categories.map((category, index) => (
        <div
          onClick={() => navigate(`${category.url}`)}
          key={index}
          id={category.name}
          css={getCategoriesStyles(category.name)}
        >
          <h3>{category.name}</h3>
        </div>
      ))}
    </section>
  );
};
