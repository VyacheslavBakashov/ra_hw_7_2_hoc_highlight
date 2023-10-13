import { FC, ReactNode } from 'react';

type PropsTypes = {
  children: ReactNode;
};

export const Popular: FC<PropsTypes> = ({ children }) => {
  return (
    <div className="wrap-item wrap-item-popular">
      <span className="label">Popular!</span>
      {children}
    </div>
  );
};
