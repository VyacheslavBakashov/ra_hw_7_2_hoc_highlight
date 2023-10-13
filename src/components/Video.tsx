import { FC } from 'react';

import { byPopularity } from '../hocs/byPopularity';
import { VideoTypes } from '../types';

export let Video: FC<VideoTypes> = ({ url, views }) => {
  return (
    <div className="item item-video">
      <iframe src={url} title='video' allow="autoplay; encrypted-media" allowFullScreen></iframe>
      <p className="views">Просмотров: {views}</p>
    </div>
  );
};

Video = byPopularity(Video);
