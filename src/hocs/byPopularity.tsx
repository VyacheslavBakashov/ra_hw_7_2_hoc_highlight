import { ComponentType, FC } from 'react';

import { New } from '../components/New';
import { Popular } from '../components/Popular';

type PropsTypes = {
  views: number;
};

export function byPopularity<T>(Component: ComponentType<T & PropsTypes>): FC<T & PropsTypes> {
  return (props) => {
    const { views } = props;

    if (views > 1000) {
      return (
        <Popular>
          <Component {...props} />
        </Popular>
      );
    }

    if (views < 100) {
      return (
        <New>
          <Component {...props} />
        </New>
      );
    }

    return <Component {...props} />;
  };
}