import { FC } from 'react';

import { VideoTypes } from '../types';
import { Article } from './Article';
import { Video } from './Video';

type PropsTypes = {
  list: VideoTypes[];
};

export const List: FC<PropsTypes> = ({ list }) => {
  return (
    <>
      {list.map((item) => {
        switch (item.type) {
          case 'video':
            return <Video {...item} key={item.id} />;

          case 'article':
            return <Article {...item} key={item.id} />;
          default:
              return <p>Empty</p>
        }
      })}
    </>
  );
};
