/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';

import { byPopularity } from '../hocs/byPopularity';
import { VideoTypes } from '../types';

export let Article: FC<VideoTypes> = ({ title, views }) => {
  return (
    <div className="item item-article">
      <h3>
        <a href="#">{title}</a>
      </h3>
      <p className="views">Прочтений: {views}</p>
    </div>
  );
};

Article = byPopularity(Article);
